import React, { Component } from 'react'

const ALL_PLAYERS_API = "http://localhost:3000/api/v1/players"
const ALL_TEAMS_API = "http://localhost:3000/api/v1/teams"
const TEAM_PLAYERS_API = "http://localhost:3000/api/v1/team_players"
const PLAYERS_API = "http://localhost:3000/api/v1/players"
const TEAMS_API = "http://localhost:3000/api/v1/teams"

class CreateProfileForm extends Component {
  constructor(props) {
    super(props)

  }

  //onSubmit posts to the api with a new user and renders the discover component (changes state to showCreateProfile to false, and loggedIn to true)

  createPlayer = (ev) => {
    ev.persist()
    console.log('creating player', ev.target.username.value)
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
      localStorage.setItem('token', json.jwt)
      console.log('CREATE NEW PLAYER JSON', json)
      this.props.receiveCurrentPlayer(json)
      return json
    })
    .then(json => this.createTeam(ev, json))
  }

  createTeam = (ev, playerJson) => {
    console.log('PLAYERJSON - create team', playerJson)
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
      console.log('CREATE NEW TEAM JSON', json)
      this.props.receiveCurrentTeam(json)
      return json
    })
    .then(json => this.associateTeamWithPlayer(playerJson, json))
  }

  associateTeamWithPlayer = (playerJson, teamJson) => {
    console.log('ASSOCIATING TEAM AND PLAYER = playerJson', playerJson)
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
    console.log('fetch players')
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
    console.log('fetch teams')
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
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    return this.createPlayer(ev)
  }

  render() {
    return (
      <div>
        <h2>Create Your Profile</h2>
        <form onSubmit={(ev) => this.handleSubmit(ev)}>
          <label htmlFor="">First Name</label>
          <input type="text" name="firstname"/>
          <label htmlFor="">Last Name</label>
          <input type="text" name="lastname"/>
          <label htmlFor="">Username</label>
          <input type="text" name="username"/>
          <label htmlFor="">Password</label>
          <input type="text" name="password"/>
          <label htmlFor="">Profile Image URL</label>
          <input type="text" name="image"/>
          <label htmlFor="">Height</label>
          <input type="text" name="height"/>
          <label htmlFor="">Position</label>
          <input type="text" name="position"/>
          <label htmlFor="">Experience Level</label>
          <select name="experiencelevel">
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
          <label htmlFor="">Bio</label>
          <textarea name="bio" cols="30" rows="10"></textarea>

          <h2>Create Your Team</h2>
          <label>Team Name</label>
          <input type="text" name="teamname"/>
          <label>Location</label>
          <input type="text" name="teamlocation"/>
          <label>League</label>
          <input type="text" name="league"/>
          <input type="submit" value="Submit"/>
      </form>
    </div>
    )
  }
}

export default CreateProfileForm