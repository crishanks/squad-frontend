import React, { Component } from 'react'

import PlayerProfileCard from '../components/PlayerProfileCard'

class PlayerProfileCardsContainer extends Component {
  constructor(props) {
    super(props)
  }

  //show one at a time: just like sushi. Add a state of current profile. Add a button the player profile card that is accept or decline. On accept, add to myPlayers

  renderPlayerProfileCards = () => {
    console.log('PLAYER PROFILE CARDS CONTAINER PROPS', this.props)
    return this.props.allPlayers.map(player => {
      return <PlayerProfileCard 
        player={player} 
        key={player.id}
        choosePlayer={this.props.choosePlayer}
        declinePlayer={this.props.declinePlayer}
      />
    })
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
