// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

//Actions
import { match } from '../actions/playerActions'

// Components
import PlayerProfileCardsContainer from './PlayerProfileCardsContainer'

// const TEAM_PLAYERS_API = "http://localhost:3000/api/v1/team_players"
const MATCHES_API = "http://localhost:3000/api/v1/matches"

class CandidatesContainer extends Component {
  constructor(props) {
    super(props)
  }

  renderComponents = () => {
    return <PlayerProfileCardsContainer matchPlayers={this.matchPlayers} />
  }

  matchPlayers = (player) => {
    const requestParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({match: {
        player_id: player.id,
        player_match_id: this.props.currentTeam.id
      }})
    }
    return fetch(MATCHES_API, requestParams)
    .then(result => result.json())
    .then(json => {
      this.props.match(json)
    })
  }

  render() {
    return (
      <div id='candidates-container'>
        {this.renderComponents()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // currentTeam: state.teamReducer.currentTeam
  }
}

const mapDispatchToProps = dispatch => {
  return {
    match: (player) => dispatch(match(player))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidatesContainer)