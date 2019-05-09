//Libraries
import React from 'react'
import { connect } from 'react-redux'

//Actions
import { login } from '../actions/componentActions'

const PlayerProfile = (props) => {

  const renderTeammates = () => {
    const myTeam = props.allTeams.find(team => team.id === props.currentTeam.id)
    const teammates = myTeam.players
    return teammates.map(teammate => {
      return (
        <div id="teammate-card-container">
          <div id="profile-card-image-container">
            <img id="profile-card-image" src={teammate.image} alt="profile card image"/>
          </div>
          <div id="teammate-card-name-box">
            <div>{teammate.name}, {teammate.age}</div>
            <div>Position {teammate.position}</div>
            <div>Height {teammate.height}</div>
            <div>Experience {teammate.experience_level}</div>
          </div>
          <div id="teammate-card-description-box">
            <div>{teammate.description}</div>
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
      {renderTeammates()}
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
    currentTeam: state.teamReducer.currentTeam,
    allTeams: state.teamReducer.allTeams
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfile)