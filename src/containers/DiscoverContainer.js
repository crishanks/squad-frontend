// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import MyInfoContainer from './MyInfoContainer'
import CandidatesContainer from './CandidatesContainer'

// Actions
import { choosePlayer } from '../actions/discoverActions'
import { chooseTeam } from '../actions/discoverActions'
import { declinePlayer } from '../actions/discoverActions'
import { declineTeam } from '../actions/discoverActions'

class DiscoverContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('discover props', this.props)
    return (
      <div>
        <h1>Discover</h1>
        <button onClick={this.props.logoutClick}>Log Out</button>
        <MyInfoContainer />
        <CandidatesContainer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    myTeams: state.discoverReducer.myTeams,
    myPlayers: state.discoverReducer.myPlayers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    choosePlayer: () => dispatch(choosePlayer()),
    chooseTeam: () => dispatch(chooseTeam()),
    declinePlayer: () => dispatch(declinePlayer()),
    declineTeam: () => dispatch(declineTeam())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverContainer)