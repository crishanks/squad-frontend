// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { login } from '../actions/homescreenActions'
import { logout } from '../actions/homescreenActions'
import { signup } from '../actions/homescreenActions'
import { toggleShowLoginForm } from '../actions/homescreenActions'
import { toggleShowProfileContainer } from '../actions/homescreenActions'
import { createTeam } from '../actions/homescreenActions'
import { receiveJWT } from '../actions/homescreenActions'
import { receiveAllPlayers } from '../actions/homescreenActions'
import { receiveAllTeams } from '../actions/homescreenActions'
import { declinePlayer } from '../actions/homescreenActions'
import { declineTeam } from '../actions/homescreenActions'
import { receiveCurrentTeam } from '../actions/homescreenActions'
import { receiveCurrentPlayer } from '../actions/homescreenActions'
import { addPlayerToCurrentTeam } from '../actions/homescreenActions'


// Components
import WelcomeBanner from '../components/WelcomeBanner'
import DiscoverContainer from './DiscoverContainer'
import CreateProfileForm from '../components/CreateProfileForm'
import LoginForm from '../components/LoginForm'
import ProfileContainer from './ProfileContainer'
import CreateTeamContainer from './CreateTeamContainer'

//URLs
const JWT_API = "http://localhost:3000/api/v1/login"
const ALL_PLAYERS_API = "http://localhost:3000/api/v1/players"
const ALL_TEAMS_API = "http://localhost:3000/api/v1/teams"

class HomeScreenContainer extends Component {
  constructor(props) {
    super(props)
  }

  requestAccessToken = (ev) => {
    const requestParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        player: {
          username: ev.target.username.value,
          password: ev.target.password.value
        }
      })
    }

    return fetch(JWT_API, requestParams)
    .then((response) => {return response.json()})
    .then((json) => {
      this.props.receiveJWT(json)
      console.log("FETCHED ACCESS TOKEN json", json)
      localStorage.setItem('token', json.jwt)
      return json.jwt
    })
    .then(jwt => {
      console.log('FETCH ALL STUFF - JWT', jwt)
      this.fetchAllPlayers(jwt);
      return this.fetchAllTeams(jwt);
    })
    .then(json => {
      this.props.receiveAllTeams(json)
      this.props.receiveCurrentTeam(this.props.currentPlayer.player.teams[0])
    })
    // .then(this.fetchAllPlayers())
  }

  fetchAllPlayers = (token) => {
    const requestParams = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    return fetch(ALL_PLAYERS_API, requestParams)
    .then(response => response.json())
    .then(json => {
      console.log('FETCHED ALL PLAYERS - json', json)
      return this.props.receiveAllPlayers(json)
    })
    .then(this.fetchAllTeams())
  }

  fetchAllTeams = (token) => {
    console.log('FETCH ALL TEAMS - token', token)
    const requestParams = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    return fetch(ALL_TEAMS_API, requestParams)
    .then(response => response.json())
    /*.then(json => {
      console.log("FETCHED ALL TEAMS - json", json)
      this.props.receiveAllTeams(json)
      this.props.receiveCurrentTeam(this.props.currentPlayer.player.teams[0])
    })*/
  }

  renderComponents = () => {
    if (this.props.loggedIn && this.props.showProfileContainer) {
      return <ProfileContainer 
        loginClick={this.props.login} 
        /* showCreateTeamForm={this.props.createTeam} */
        currentPlayer={this.props.currentPlayer}
        currentTeam={this.props.currentTeam}
        allTeams={this.props.allTeams}
        logout={this.props.logout}
      />
    } else if (this.props.showCreateProfileForm) {
      return <CreateProfileForm 
        fetchPlayersAndTeams={this.fetchAllPlayers} 
        currentPlayer={this.props.currentPlayer} 
        loginClick={this.props.login} 
        receiveCurrentTeam={this.props.receiveCurrentTeam}
        currentTeam={this.props.currentTeam}
        receiveCurrentPlayer={this.props.receiveCurrentPlayer}
        receiveAllTeams={this.props.receiveAllTeams}
        receiveAllPlayers={this.props.receiveAllPlayers}
        logout={this.props.logout}
      />
    } else if (this.props.showLoginForm) {
      return <LoginForm 
        requestAccessToken={this.requestAccessToken} 
        requestPlayers={this.fetchAllPlayers}
        requestTeams={this.fetchAllTeams}
        logout={this.props.logout}
      />
    } else if (!this.props.loggedIn && !this.props.showCreateProfileForm && !this.props.showLoginForm) {
      return <WelcomeBanner showLoginFormClick={this.props.toggleShowLoginForm} signupClick={this.props.signup}/>
    } else if (this.props.loggedIn) {
      return <DiscoverContainer 
        logout={this.props.logout} 
        showProfileContainer={this.props.toggleShowProfileContainer} 
        currentPlayer={this.props.currentPlayer}
        allPlayers={this.props.allPlayers}
        declinePlayer={this.props.declinePlayer}
        declineTeam={this.props.declineTeam}
        currentTeam={this.props.currentTeam}
        fetchPlayersAndTeams={this.fetchAllPlayers}
        addPlayerToCurrentTeam={this.props.addPlayerToCurrentTeam}
      />
    }
  }

  // else if (this.props.loggedIn && this.props.showCreateTeamForm) {
  //   return <CreateTeamContainer/>

  render() {
    console.log('hsc props', this.props)
  return (
    <>
      {this.renderComponents()}
    </>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.homescreenReducer.loggedIn,
    showLoginForm: state.homescreenReducer.showLoginForm,
    currentPlayer: state.homescreenReducer.currentPlayer,
    showCreateProfileForm: state.homescreenReducer.showCreateProfileForm,
    showProfileContainer: state.homescreenReducer.showProfileContainer,
    // showCreateTeamForm: state.homescreenReducer.showCreateTeamForm,
    currentPlayer: state.homescreenReducer.currentPlayer,
    allPlayers: state.homescreenReducer.allPlayers,
    allTeams: state.homescreenReducer.allTeams,
    currentTeam: state.homescreenReducer.currentTeam
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
    signup: () => dispatch(signup()),
    toggleShowLoginForm: () => dispatch(toggleShowLoginForm()),
    toggleShowProfileContainer: () => dispatch(toggleShowProfileContainer()),
    createTeam: (team) => dispatch(createTeam(team)),
    receiveJWT: (json) => dispatch(receiveJWT(json)),
    receiveAllPlayers: (json) => dispatch(receiveAllPlayers(json)),
    receiveAllTeams: (json) => dispatch(receiveAllTeams(json)),
    declinePlayer: (player) => dispatch(declinePlayer(player)),
    declineTeam: (team) => dispatch(declineTeam(team)),
    receiveCurrentTeam: (json) => dispatch(receiveCurrentTeam(json)),
    receiveCurrentPlayer: (player) => dispatch(receiveCurrentPlayer(player)),
    addPlayerToCurrentTeam: (player) => dispatch(addPlayerToCurrentTeam(player))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer)