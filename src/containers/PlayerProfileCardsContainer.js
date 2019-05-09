import React, { Component } from 'react'

import PlayerProfileCard from '../components/PlayerProfileCard'

class PlayerProfileCardsContainer extends Component {
  constructor(props) {
    super(props)
  }

  renderPlayerProfileCards = () => {
    const allPlayersLength = this.props.allPlayers.length
    //Need to Refactor this -- player cards should not repeat on each login.
    const playerToShow = this.props.allPlayers[Math.floor(Math.random() * allPlayersLength - 2)]
    return <PlayerProfileCard 
      player={playerToShow} 
      associatePlayerWithTeam={this.props.associatePlayerWithTeam}
      currentTeam={this.props.currentTeam}
      currentPlayer={this.props.currentPlayer}
    />
  }

  render() {
    return (
      <>
        {this.renderPlayerProfileCards()}
      </>
    )
  }
}

export default PlayerProfileCardsContainer
