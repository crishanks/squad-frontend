// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import TeamProfileCardsContainer from './TeamProfileCardsContainer'
import PlayerProfileCardsContainer from './PlayerProfileCardsContainer'

const TEAM_PLAYERS_API = "http://localhost:3000/api/v1/team_players"

class CandidatesContainer extends Component {
  constructor(props) {
    super(props)
  }

  renderComponents = () => {
    return <PlayerProfileCardsContainer 
      allPlayers={this.props.allPlayers}
      choosePlayer={this.props.choosePlayer}
      declinePlayer={this.props.declinePlayer}
      associatePlayerWithTeam={this.associatePlayerWithTeam}
      currentTeam={this.props.currentTeam}
    />
  }

  // if (this.props.currentPlayer.showTeams) {
  //   return <TeamProfileCardsContainer 
  //     allTeams={this.props.allTeams}
  //     chooseTeam={this.props.chooseTeam}
  //     declineTeam={this.props.declineTeam}
  //   /> 

  associatePlayerWithTeam = (player) => {
    console.log('ASSOCIATING PLAYER AND TEAM - CANDIDATES CONTAINER')
    const requestParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({team_player: {
        player_id: player.id,
        team_id: this.props.currentTeam.id
      }})
    }
    return fetch(TEAM_PLAYERS_API, requestParams)
  }

  render() {
    return (
      <div id='candidates-container'>
        {this.renderComponents()}
      </div>
    )
  }
}

export default CandidatesContainer