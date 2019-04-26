// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import TeamProfileCardsContainer from './TeamProfileCardsContainer'
import PlayerProfileCardsContainer from './PlayerProfileCardsContainer'

// Actions
import { showTeams } from '../actions/candidatesActions'
import { showPlayers } from '../actions/candidatesActions'

class CandidatesContainer extends Component {
  constructor(props) {
    super(props)
  }

  renderComponents = () => {
    if (this.props.showTeams) {
      return <TeamProfileCardsContainer /> 
    } else if (this.props.showPlayers) {
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

const mapStateToProps = state => {
  return {
    showTeams: state.candidatesReducer.showTeams,
    showPlayers: state.candidatesReducer.showPlayers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showTeams: () => dispatch(showTeams()),
    showPlayers: () => dispatch(showPlayers())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CandidatesContainer)