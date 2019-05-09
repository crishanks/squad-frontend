// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

//Actions
import { addPlayerToCurrentTeam } from '../actions/teamActions'

// Components
import PlayerProfileCardsContainer from './PlayerProfileCardsContainer'

const TEAM_PLAYERS_API = "https://squad-backend.herokuapp.com/api/v1/team_players"

class CandidatesContainer extends Component {
  constructor(props) {
    super(props)
  }

  renderComponents = () => {
    return <PlayerProfileCardsContainer associatePlayerWithTeam={this.associatePlayerWithTeam} />
  }

  associatePlayerWithTeam = (player) => {
    const requestParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({team_player: {
        player_id: player.id,
        team_id: this.props.currentTeam.id,
        organizer: false
      }})
    }
    return fetch(TEAM_PLAYERS_API, requestParams)
    .then(result => result.json())
    .then(() => this.props.addPlayerToCurrentTeam(player))
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
    currentTeam: state.teamReducer.currentTeam
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPlayerToCurrentTeam: (player) => dispatch(addPlayerToCurrentTeam(player))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidatesContainer)