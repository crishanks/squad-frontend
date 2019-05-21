//Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

//Actions
import { login } from '../actions/componentActions'
import { match } from '../actions/matchActions'
import { receiveCurrentPlayer } from '../actions/playerActions'

class PlayerProfile extends Component {

  componentDidMount = () => {
    console.log('player profile props', this.props)
    const currentPlayerMatchIds = this.props.currentPlayer.player.matches.map(match => match.player_match_id)
    const matches = currentPlayerMatchIds.map(id => this.props.allPlayers.find(player => player.id === id))
    console.log('renderMatches - matches', matches)
    this.props.match(matches)
    this.props.currentPlayer.matches = matches
  }

  renderMatches = () => {
    const currentPlayerMatchIds = this.props.currentPlayer.player.matches.map(match => match.player_match_id)
    const matches = currentPlayerMatchIds.map(id => this.props.allPlayers.find(player => player.id === id))

    return matches.map(match => {
      return (
        <div id="teammate-card-container">
          <div id="profile-card-image-container">
            <img id="profile-card-image" src={match.image} alt="profile card image"/>
          </div>
          <div id="teammate-card-name-box">
            <div>{match.name}, {match.age}</div>
            <div>Position {match.position}</div>
            <div>Height {match.height}</div>
            <div>Experience {match.experience_level}</div>
          </div>
          <div id="teammate-card-description-box">
            <div>{match.description}</div>
          </div>
        </div>
      )
    })
  }

  render () {
    return (
      <>
      <div id="player-info-container">
        <div id="player-info">
          <h2>{this.props.currentPlayer.player.name}
          </h2>
          <img src={this.props.currentPlayer.player.image} alt="player profile image"/>
          <p>Height: {this.props.currentPlayer.player.height}</p>
          <p>Skill Level: {this.props.currentPlayer.player.experience_level}</p>
          <p>Position: {this.props.currentPlayer.player.position}</p>
          <p>Bio: {this.props.currentPlayer.player.description}</p>
        </div>
        <div id="teammates-header">My Team</div>
        <div className="discover-button" onClick={this.props.login}>Discover</div>
      </div> 
      <div id="teammate-cards-container">
        {this.renderMatches()}
      </div>
      <div id="teammate-profile-app-footer" className="flex-center">
        <div className="profile-bar-item">SQUAD</div>
      </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentPlayer: state.playerReducer.currentPlayer,
    matches: state.matchReducer.matches,
    allPlayers: state.playerReducer.allPlayers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login()),
    match: (matches) => dispatch(match(matches)),
    receiveCurrentPlayer: (player) => dispatch(receiveCurrentPlayer(player))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfile)