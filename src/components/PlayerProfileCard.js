//Libraries
import React from 'react'
import { connect } from 'react-redux'

//Actions
import { declinePlayer } from '../actions/playerActions'

//Assets
import check from '../assets/images/icons/check.png';
import x from '../assets/images/icons/x.png';

const PlayerProfileCard = (props) => {

  const handleChoosePlayer = () => {
    if (props.player.potential_matches.includes(props.currentPlayer)) {
      return props.match(props.player)
      .then(props.declinePlayer(props.player))
    }
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
        <div className="circle" id="decline-circle" onClick={() => props.declinePlayer(props.player)}>
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
    // currentTeam: state.teamReducer.currentTeam
  }
}

const mapDispatchToProps = dispatch => {
  return {
    declinePlayer: (player) => dispatch(declinePlayer(player))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfileCard)
