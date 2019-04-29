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
    console.log('candidates container props', this.props)
    return <PlayerProfileCardsContainer 
      allPlayers={this.props.allPlayers}
      choosePlayer={this.props.choosePlayer}
      declinePlayer={this.props.declinePlayer}
    />
  }

  // if (this.props.currentPlayer.showTeams) {
  //   return <TeamProfileCardsContainer 
  //     allTeams={this.props.allTeams}
  //     chooseTeam={this.props.chooseTeam}
  //     declineTeam={this.props.declineTeam}
  //   /> 

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