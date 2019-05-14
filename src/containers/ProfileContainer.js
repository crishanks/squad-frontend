//Libraries
import React, { Component } from 'react'

//Components
import PlayerProfile from '../components/PlayerProfile'
import ProfileBar from '../components/ProfileBar'

// const PLAYERS_API = "http://localhost:3000/api/v1/players/"

class ProfileContainer extends Component {
  constructor(props) {
    super(props)
  }

  // updatePlayerShowTeams = () => {
  //   const requestParams = {
  //     method: 'PATCH',
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem('token')}`
  //     },
  //     body: JSON.stringify({
  //       show_teams: true
  //     })
  //   }
  //   fetch(PLAYERS_API + this.props.currentPlayer.player.id, requestParams)
  // }

  // updatePlayerShowPlayers = () => {
  //   const requestParams = {
  //     method: 'PATCH',
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem('token')}`
  //     },
  //     body: JSON.stringify({
  //       show_teams: false
  //     })
  //   }
  //   fetch(PLAYERS_API + this.props.currentPlayer.player.id, requestParams)
  // }

  render() {
    return (
      <div id="profile-container">
        <ProfileBar />
        <PlayerProfile />
      </div>
    )
  }
}

export default ProfileContainer