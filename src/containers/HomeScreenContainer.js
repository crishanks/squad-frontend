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
import { receiveJSON } from '../actions/homescreenActions'
import { receiveAllPlayers } from '../actions/homescreenActions'



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

  // componentDidMount = () => {
  //   this.requestAccessToken()
  // }

  requestAccessToken = (ev) => {
    console.log('request access token values', ev.target.username.value)
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
      console.log('json', json)
      this.props.receiveJSON(json)
      localStorage.setItem('token', json.jwt)
    })
    .then(this.fetchAllPlayers())
  }

  fetchAllPlayers = () => {
    const requestParams = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }

    return fetch(ALL_PLAYERS_API, requestParams)
    .then(response => response.json())
    .then(json => {
      console.log('all players json', json)
      this.props.receiveAllPlayers(json)
    })
    .then(this.fetchAllTeams())
  }

  fetchAllTeams = () => {
    const requestParams = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }

    fetch(ALL_TEAMS_API, requestParams)
    .then(response => response.json())
    .then(json => {
      console.log('all teams json', json)
    })
  }
  

  renderComponents = () => {
    console.log(' homescreen render components props', this.props)
    if (this.props.loggedIn && this.props.showProfileContainer) {
      return <ProfileContainer loginClick={this.props.login} showCreateTeamForm={this.props.createTeam}/>
    } else if (this.props.loggedIn && this.props.showCreateTeamForm) {
      return <CreateTeamContainer/>
    } else if (this.props.showCreateProfileForm) {
      return <CreateProfileForm loginClick={this.props.login}/>
    } else if (this.props.showLoginForm) {
      return <LoginForm loginClick={this.props.login} requestAccessToken={this.requestAccessToken}/>
    } else if (!this.props.loggedIn && !this.props.showCreateProfileForm && !this.props.showLoginForm) {
      return <WelcomeBanner showLoginFormClick={this.props.toggleShowLoginForm} signupClick={this.props.signup}/>
    } else if (this.props.loggedIn) {
      return <DiscoverContainer logoutClick={this.props.logout} showProfileContainer={this.props.toggleShowProfileContainer} currentPlayer={this.props.currentPlayer}/>
    }
  }

  render() {
    console.log('hsc props', this.props)
    console.log('hsc state', this.state)

  return (
      <div>
        {this.renderComponents()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('hs mapstatetoprops state', state)
  return {
    loggedIn: state.homescreenReducer.loggedIn,
    showLoginForm: state.homescreenReducer.showLoginForm,
    currentPlayer: state.homescreenReducer.currentPlayer,
    showCreateProfileForm: state.homescreenReducer.showCreateProfileForm,
    showProfileContainer: state.homescreenReducer.showProfileContainer,
    showCreateTeamForm: state.homescreenReducer.showCreateTeamForm,
    currentPlayer: state.homescreenReducer.currentPlayer,
    allPlayers: state.homescreenReducer.allPlayers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
    signup: () => dispatch(signup()),
    toggleShowLoginForm: () => dispatch(toggleShowLoginForm()),
    toggleShowProfileContainer: () => dispatch(toggleShowProfileContainer()),
    createTeam: () => dispatch(createTeam()),
    receiveJSON: (json) => dispatch(receiveJSON(json)),
    receiveAllPlayers: (json) => dispatch(receiveAllPlayers(json))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer)