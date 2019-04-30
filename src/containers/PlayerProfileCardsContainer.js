import React, { Component } from 'react'

import PlayerProfileCard from '../components/PlayerProfileCard'

class PlayerProfileCardsContainer extends Component {
  constructor(props) {
    super(props)
  }

  //show one at a time: just like sushi. Add a state of current profile. Add a button the player profile card that is accept or decline. On accept, add to myPlayers
  

  renderPlayerProfileCards = () => {
    console.log('PLAYER PROFILE CARDS CONTAINER PROPS', this.props)
    const allPlayersLength = this.props.allPlayers.length
    const playerToShow = this.props.allPlayers[allPlayersLength - 1]
    return <PlayerProfileCard 
      player={playerToShow} 
      key={playerToShow.id}
      choosePlayer={this.props.choosePlayer}
      declinePlayer={this.props.declinePlayer}
      associatePlayerWithTeam={this.props.associatePlayerWithTeam}
      currentTeam={this.props.currentTeam}
    />
  }

  render() {
    return (
      <div>
        <h2>In Player Profile Cards Container</h2>
        {this.renderPlayerProfileCards()}
      </div>
    )
  }
}

export default PlayerProfileCardsContainer
