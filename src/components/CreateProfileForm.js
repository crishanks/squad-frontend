//Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

//Actions
import { login } from '../actions/componentActions'
import { logout } from '../actions/componentActions'
import { receiveCurrentTeam } from '../actions/teamActions'
import { receiveAllTeams } from '../actions/teamActions'
import { receiveCurrentPlayer } from '../actions/playerActions'
import { receiveAllPlayers } from '../actions/playerActions'

//Routes
const ALL_PLAYERS_API = "https://squad-backend.herokuapp.com/api/v1/players"
const ALL_TEAMS_API = "https://squad-backend.herokuapp.com/api/v1/teams"
const TEAM_PLAYERS_API = "https://squad-backend.herokuapp.com/api/v1/team_players"
const PLAYERS_API = "https://squad-backend.herokuapp.com/api/v1/players"
const TEAMS_API = "https://squad-backend.herokuapp.com/api/v1/teams"

class CreateProfileForm extends Component {
  constructor(props) {
    super(props)
  }

  createPlayer = (ev) => {
    ev.persist()
    const requestParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({player: {
        name: ev.target.firstname.value + ' ' + ev.target.lastname.value,
        image: ev.target.image.value,
        username: ev.target.username.value,
        password: ev.target.password.value,
        height: ev.target.height.value,
        position: ev.target.position.value,
        experience_level: ev.target.experiencelevel.value,
        description: ev.target.bio.value
      }})
    }
    return fetch(PLAYERS_API, requestParams)
    .then(res => res.json())
    .then(json => {
      if (json.error) {
        alert('Invalid Username or Password')
        throw 'error'
      }
      localStorage.setItem('token', json.jwt)
      this.props.receiveCurrentPlayer(json)
      return json
    })
    .then(json => this.createTeam(ev, json))
    .then(this.props.login)
  }

  createTeam = (ev, playerJson) => {
    ev.persist()
    const requestParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({team: {
        name: ev.target.teamname.value,
        location: ev.target.teamlocation.value,
        league: ev.target.league.value
      }})
    }
    return fetch(TEAMS_API, requestParams)
    .then(results => results.json())
    .then(json => {
      this.props.receiveCurrentTeam(json)
      return json
    })
    .then(json => this.associateTeamWithPlayer(playerJson, json))
  }

  associateTeamWithPlayer = (playerJson, teamJson) => {
    const requestParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({team_player: {
        player_id: playerJson.player.id,
        team_id: teamJson.id
      }})
    }
    return fetch(TEAM_PLAYERS_API, requestParams)
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

    return fetch(ALL_TEAMS_API, requestParams)
    .then(response => response.json())
    .then(json => {
      this.props.receiveAllTeams(json)
    }).catch(error => {
      alert(error.message)
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    return this.createPlayer(ev)
  }

  render() {
    return (
      <div id="create-profile-container">
        <form id="create-profile-form" onSubmit={(ev) => this.handleSubmit(ev)}>
          <div id="create-profile-logo" className="logo" onClick={this.props.logout}>SQUAD</div>
          <div className="create-profile-input">
            <input placeholder="first name" type="text" name="firstname"/>
          </div>
          <div className="create-profile-input">
            <input placeholder="last name" type="text" name="lastname"/>
          </div>
          <div className="create-profile-input">
            <input placeholder="username" type="text" name="username"/>
          </div>
          <div className="create-profile-input">
            <input placeholder="password" type="text" name="password"/>
          </div>
          <div className="create-profile-input">
            <input placeholder="image url" type="text" name="image"/>
          </div>
          <div className="create-profile-input">
            <input placeholder="height" type="text" name="height"/>
          </div>
          <div className="create-profile-input">
            <input placeholder="position" type="text" name="position"/>
          </div>
          <div className="create-profile-input">
            <select name="experiencelevel">
              <option id="create-profile-label" default>skill level &#8250;</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="create-profile-input">
            
            <textarea className="create-profile-input"  placeholder="bio" name="bio" cols="30" rows="10"></textarea>
          </div>

          <div className="create-profile-input">
            <input placeholder="team name" type="text" name="teamname"/>
          </div>
          <div className="create-profile-input">
            <input placeholder="location" type="text" name="teamlocation"/>
          </div>
          <div className="create-profile-input">
            <input placeholder="league" type="text" name="league"/>
          </div>
          <input id="create-profile-submit" type="submit" value="SUBMIT"/>
      </form>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentPlayer: state.playerReducer.currentPlayer,
    currentTeam: state.teamReducer.currentTeam
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
    receiveAllPlayers: (json) => dispatch(receiveAllPlayers(json)),
    receiveAllTeams: (json) => dispatch(receiveAllTeams(json)),
    receiveCurrentTeam: (json) => dispatch(receiveCurrentTeam(json)),
    receiveCurrentPlayer: (player) => dispatch(receiveCurrentPlayer(player))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfileForm)