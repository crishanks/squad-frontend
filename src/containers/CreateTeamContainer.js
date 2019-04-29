import React, { Component } from 'react'

import CreateTeamForm from '../components/CreateTeamForm'

const TEAMS_API = "http://localhost:3000/api/v1/teams"

class CreateTeamContainer extends Component {
  constructor(props) {
    super(props)
  }

  createTeam = (ev) => {
    const requestParams = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        name: ev.target.teamname.value,
        location: ev.target.location.value,
        league: ev.target.league.value
      })
    }
    fetch(TEAMS_API, requestParams)
    .then(response => response.json())
    .then(json => console.log('new team response', json))
  }

  render() {
    return (
      <div>
        <h1>In Create Team Container</h1>
        <CreateTeamForm createTeam={this.createTeam}/>
      </div>
    )
  }
}

export default CreateTeamContainer