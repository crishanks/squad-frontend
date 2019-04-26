// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import TeamProfileCardsContainer from './TeamProfileCardsContainer'
import PlayerProfileCardsContainer from './PlayerProfileCardsContainer'

class CandidatesContainer extends Component {
  constructor(props) {
    super(props)
  }

  renderComponents = () => {
    // if the current player's showTeams is true render component...
    if (this.props.currentPlayer.showTeams) {
      return <TeamProfileCardsContainer /> 
    } else {
      return <PlayerProfileCardsContainer />
    }
  }

  render() {
    console.log('candidates container props', this.props)
    return (
      <div>
        <div>
          <h1>In Candidates Container</h1>
          {this.renderComponents()}
        </div>
      </div>
    )
  }
}

export default CandidatesContainer