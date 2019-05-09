//Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

//Components
import PlayerProfileCard from '../components/PlayerProfileCard'

class PlayerProfileCardsContainer extends Component {
  constructor(props) {
    super(props)
  }

  renderPlayerProfileCards = () => {
    const allPlayersLength = this.props.allPlayers.length
    //Need to Refactor this -- player cards should not repeat on each login.
    const playerToShow = this.props.allPlayers[Math.floor(Math.random() * allPlayersLength - 2)]
    console.log('RENDER PLAYER CARDS PLAYER', playerToShow)
    return <PlayerProfileCard 
      player={playerToShow} 
      associatePlayerWithTeam={this.props.associatePlayerWithTeam}
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

const mapStateToProps = state => {
  return {
    allPlayers: state.playerReducer.allPlayers
  }
}

export default connect(mapStateToProps, null)(PlayerProfileCardsContainer)
