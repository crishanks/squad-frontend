// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import TeamProfileCardsContainer from './TeamProfileCardsContainer'
import TeamProfileCardsContainer from './PlayerProfileCardsContainer'

// Actions


class CandidatesContainer extends Component {
  constructor(props) {
    super(props)
  }

  renderComponents = () => {
    if (this.props.showTeamProfileCards) {
      return < TeamProfileCardsContainer /> 
    } else if (this.props.showPlayerProfileCards) {
      return <PlayerProfileCardsContainer />
    }
  }

  render() {
    console.log('candidates container props', this.props)
    return (
      <div>
        {this.renderComponents()}
      </div>
    )
  }
}


export default CandidatesContainer