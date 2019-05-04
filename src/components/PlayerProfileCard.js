import React from 'react'

const PlayerProfileCard = (props) => {

  const handleChoosePlayer = () => {
    return props.associatePlayerWithTeam(props.player)
    .then(props.declinePlayer(props.player))
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
          <img src="../src/assets/images/icons/x.png" alt="x"/>
        </div>
        <div className="circle" id="accept-circle" onClick={(props) => handleChoosePlayer(props)}>
          <img src="../src/assets/images/icons/check.png" alt="check"/>
        </div>
      </div>
    </div>
  )}
  return null;
}

export default PlayerProfileCard
