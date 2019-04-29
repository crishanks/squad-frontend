import React, { Component } from 'react'

import PlayerProfile from '../components/PlayerProfile'

const PLAYERS_API = "http://localhost:3000/api/v1/players/"

class ProfileContainer extends Component {
  constructor(props) {
    super(props)
  }

  updatePlayerShowTeams = () => {
    const requestParams = {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        show_teams: true
      })
    }
    fetch(PLAYERS_API + this.props.currentPlayer.player.id, requestParams)
  }

  updatePlayerShowPlayers = () => {
    const requestParams = {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        show_teams: false
      })
    }
    fetch(PLAYERS_API + this.props.currentPlayer.player.id, requestParams)
  }

  render() {
    return (
      <div>
        <h1>In Profile Container</h1>
        <PlayerProfile 
          login={this.props.loginClick} 
          showCreateTeamForm={this.props.showCreateTeamForm}
          currentPlayer={this.props.currentPlayer}
          showTeams={this.updatePlayerShowTeams}
          showPlayers={this.updatePlayerShowPlayers}
        />
      </div>
    )
  }
}

export default ProfileContainer