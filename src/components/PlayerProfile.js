//Libraries
import React from 'react'
import { connect } from 'react-redux'

//Actions
import { login } from '../actions/componentActions'

const PlayerProfile = (props) => {

  const renderMatches = () => {
    console.log('player profile props', props)
    //get each of the player_match ids from the currentPlayer's player matches
    //find the player object corresponding to each of the player match ids in that array
    const currentPlayerMatchIds = props.currentPlayer.player.matches.map(match => match.player_match_id)
    
    const matches = currentPlayerMatchIds.map(id => props.allPlayers.find(player => player.id === id))

    return matches.map(match => {
      return (
        <div id="teammate-card-container" key={match.id}>
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

  return (
    <>
    <div id="player-info-container">
      <div id="player-info">
        <h2>{props.currentPlayer.player.name}
        </h2>
        <img src={props.currentPlayer.player.image} alt="player profile image"/>
        <p>Height: {props.currentPlayer.player.height}</p>
        <p>Skill Level: {props.currentPlayer.player.experience_level}</p>
        <p>Position: {props.currentPlayer.player.position}</p>
        <p>Bio: {props.currentPlayer.player.description}</p>
      </div>
      <div id="teammates-header">My Team</div>
      <div className="discover-button" onClick={props.login}>Discover</div>
    </div> 
    <div id="teammate-cards-container">
      {renderMatches()}
    </div>
    <div id="teammate-profile-app-footer" className="flex-center">
      <div className="profile-bar-item">SQUAD</div>
    </div>
    </>
  )
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
    login: () => dispatch(login())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfile)