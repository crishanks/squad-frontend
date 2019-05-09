// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import TeamProfileCardsContainer from './TeamProfileCardsContainer'
import PlayerProfileCardsContainer from './PlayerProfileCardsContainer'

const TEAM_PLAYERS_API = "https://squad-backend.herokuapp.com/api/v1/team_players"

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
      currentPlayer={this.props.currentPlayer}
    />
  }

  associatePlayerWithTeam = (player) => {
    const requestParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({team_player: {
        player_id: player.id,
        team_id: this.props.currentTeam.id,
        organizer: false
      }})
    }
    return fetch(TEAM_PLAYERS_API, requestParams)
    .then(result => result.json())
    .then(() => this.props.addPlayerToCurrentTeam(player))
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