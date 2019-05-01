import React, { Component } from 'react'

import PlayerProfileCard from '../components/PlayerProfileCard'

class PlayerProfileCardsContainer extends Component {
  constructor(props) {
    super(props)
  }

  //show one at a time: just like sushi. Add a state of current profile. Add a button the player profile card that is accept or decline. On accept, add to myPlayers
  

  renderPlayerProfileCards = () => {
    const allPlayersLength = this.props.allPlayers.length
    //Need to Refactor this -- player cards should not repeat on each login.
    const playerToShow = this.props.allPlayers[Math.floor(Math.random() * allPlayersLength - 2)]
    console.log('PLAYER PROFILE CARDS CONTAINER - player to show', playerToShow)
    return <PlayerProfileCard 
      player={playerToShow} 
      /* key={playerToShow.id} */
      choosePlayer={this.props.choosePlayer}
      declinePlayer={this.props.declinePlayer}
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
