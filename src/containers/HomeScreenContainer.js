// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { receiveJWT } from '../actions/playerActions'
import { receiveAllPlayers } from '../actions/playerActions'
import { receiveCurrentPlayer } from '../actions/playerActions'
import { login } from '../actions/componentActions'

// Components
import WelcomeBanner from '../components/WelcomeBanner'
import DiscoverContainer from './DiscoverContainer'
import CreateProfileForm from '../components/CreateProfileForm'
import LoginForm from '../components/LoginForm'
import ProfileContainer from './ProfileContainer'

//URLs
const JWT_API = "http://localhost:3000/api/v1/login"
const ALL_PLAYERS_API = "http://localhost:3000/api/v1/players"

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
      console.log("fetch JWT json", json)
      if (json.message) {
        throw new Error('Invalid Username or Password')
      } 
      localStorage.setItem('token', json.jwt)
      this.props.receiveJWT(json)
      return json.jwt
    })
    .then(jwt => {
      return this.fetchAllPlayers(jwt)
    })
    .then(this.props.login)
    .catch(error => {
      alert(error.message)
    })
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
      console.log('fetch all players json', json)
      return this.props.receiveAllPlayers(json)
    })
    // .then(this.fetchAllTeams(token))
  }

  // fetchAllTeams = (token) => {
  //   const requestParams = {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   }

  //   return fetch(ALL_TEAMS_API, requestParams)
  //   .then(response => response.json())
  //   .then(json => {
  //     this.props.receiveAllTeams(json)
  //     this.props.receiveCurrentTeam(this.props.currentPlayer.player.teams[0])
  //   })
  // }

  renderComponents = () => {
    if (this.props.loggedIn && this.props.showProfileContainer) {
      return <ProfileContainer />
    } else if (this.props.showCreateProfileForm) {
      return <CreateProfileForm fetchPlayers={this.fetchAllPlayers} />
    } else if (this.props.showLoginForm) {
      return <LoginForm 
        requestAccessToken={this.requestAccessToken} 
        fetchPlayers={this.fetchAllPlayers}
        /* requestTeams={this.fetchAllTeams} */
      />
    } else if (!this.props.loggedIn && !this.props.showCreateProfileForm && !this.props.showLoginForm) {
      return <WelcomeBanner />
    } else if (this.props.loggedIn) {
      return <DiscoverContainer fetchPlayers={this.fetchAllPlayers} />
    }
  }

  render() {
  return (
    <>
      {this.renderComponents()}
    </>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.componentReducer.loggedIn,
    showLoginForm: state.componentReducer.showLoginForm,
    currentPlayer: state.playerReducer.currentPlayer,
    showCreateProfileForm: state.componentReducer.showCreateProfileForm,
    showProfileContainer: state.componentReducer.showProfileContainer,
    allPlayers: state.playerReducer.allPlayers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    receiveJWT: (json) => dispatch(receiveJWT(json)),
    receiveAllPlayers: (json) => dispatch(receiveAllPlayers(json)),
    receiveCurrentPlayer: (player) => dispatch(receiveCurrentPlayer(player)),
    login: () => dispatch(login())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer)