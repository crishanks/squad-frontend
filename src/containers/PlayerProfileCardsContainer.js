import React, { Component } from 'react'

import PlayerProfileCard from '../components/PlayerProfileCard'

class PlayerProfileCardsContainer extends Component {
  constructor(props) {
    super(props)
  }

  //method to map over all players and create cards for them. Show just one at a time, like sushi

  renderPlayerProfileCards = () => {
    console.log('player profile cards container props', this.props)
    return this.props.allPlayers.map(player => {
      return <PlayerProfileCard player={player} key={player.id}/>
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
