import React, { Component } from 'react'

import PlayerProfileCard from '../components/PlayerProfileCard'

class PlayerProfileCardsContainer extends Component {
  constructor(props) {
    super(props)
  }

  //method to map over all players and create cards for them. Show just one at a time, like sushi

  componentDidMount = () => {
    this.renderPlayerProfileCards()
  }

  renderPlayerProfileCards = () => {
    console.log('player profile cards container props', this.props)
    this.props.allPlayers.map(player => {
      return <PlayerProfileCard player={player} key={player.id}/>
    })
  }

  render() {
    return (
      <div>
        {this.renderPlayerProfileCards()}
      </div>
    )
  }
}

export default PlayerProfileCardsContainer
