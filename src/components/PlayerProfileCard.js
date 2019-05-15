//Libraries
import React from 'react'
import { connect } from 'react-redux'

//Actions
import { hidePlayer } from '../actions/playerActions'
import { match } from '../actions/matchActions'

//Assets
import check from '../assets/images/icons/check.png'
import x from '../assets/images/icons/x.png'

//API
const MATCHES_API = 'http://localhost:3000/api/v1/matches'
const POTENTIAL_MATCHES_API = 'http://localhost:3000/api/v1/potential_matches'

const PlayerProfileCard = (props) => {

  const determineIfMatch = () => {
    const playerShowing = props.player
    console.log('playerShowing', playerShowing)
    const playerShowingPotentialMatches = playerShowing.potential_matches.map(pm => pm.player_match_id)
    console.log('playerShowingPotentialMatches', playerShowingPotentialMatches)
    if (playerShowingPotentialMatches.includes(props.currentPlayer.player.id)) {
      matchPlayers(playerShowing)
    } else {
      addToPotentialMatches(playerShowing)
    }
  }

  const matchPlayers = (player) => {
    console.log('begin match players - player', player)
    const requestParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        match: {
          player_id: props.currentPlayer.player.id,
          player_match_id: player.id
        }
      })
    }
    return fetch(MATCHES_API, requestParams)
    .then(response => response.json())
    .then(console.log)
    .then(props.match(props.player))
    .then(props.hidePlayer(props.player))
  }

  const addToPotentialMatches = (player) => {
    const requestParams = {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        potential_match: {
          player_id: props.currentPlayer.player.id,
          player_match_id: player.id
        }
      })
    }
    fetch(POTENTIAL_MATCHES_API, requestParams)
    .then(response => response.json())
    .then(console.log)
    .then(props.hidePlayer(props.player))
  }

  const handleChoosePlayer = () => {
    determineIfMatch()
  }


  if (props.player) {
    return (
    <div id="player-card-container">
      <div id="profile-card-image-container">
        <img id="profile-card-image" src={props.player.image} alt="player profile card image"/>
      </div>
      <div id="name-box">
        <div className="header">{props.player.name}, {props.player.age}</div>
        <div> <span className="bold">Position:</span> {props.player.position}</div>
        <div> <span className="bold">Height:</span>  {props.player.height}</div>
        <div> <span className="bold">Skill Level:</span>  {props.player.experience_level}</div>
      </div>
      <div id="description-box">
        <div>{props.player.description}</div>
      </div>
      <div id="profile-card-footer">
        <div className="circle" id="decline-circle" onClick={() => props.hidePlayer(props.player)}>
          <img src={x} alt="x"/>
        </div>
        <div className="circle" id="accept-circle" onClick={(props) => handleChoosePlayer(props)}>
          <img src={check} alt="check"/>
        </div>
      </div>
    </div>
  )}
  return null;
}

const mapStateToProps = state => {
  return {
    currentPlayer: state.playerReducer.currentPlayer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hidePlayer: (player) => dispatch(hidePlayer(player)),
    match: (player) => dispatch(match(player))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfileCard)
