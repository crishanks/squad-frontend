import React, { Component } from 'react'

import PlayerProfileCard from '../components/PlayerProfileCard'

class PlayerProfileCardsContainer extends Component {
  constructor(props) {
    super(props)
  }

  //method to map over all players and create cards for them. Show just one at a time, like sushi

  render() {
    return (
      <div>
        <PlayerProfileCard />
      </div>
    )
  }
}

export default PlayerProfileCardsContainer
