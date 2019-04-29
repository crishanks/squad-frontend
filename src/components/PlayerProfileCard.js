import React from 'react'

const PlayerProfileCard = (props) => {
  // console.log('PLAYER PROFILE CARD PLAYER', props.player)
  return (
    <div className="player-profile-card-image">
      <img src={props.player.image} alt="player image"/>
      <div className="player-prifoile-card-info">
        <h1>{props.player.name}</h1>
        <p>{props.player.height}</p>
        <p>{props.player.position}</p>
        <p>{props.player.experience_level}</p>
        <p>{props.player.description}</p>
        <button onClick={() => props.declinePlayer(props.player)}>Decline</button>
        <button onClick={() => props.choosePlayer(props.player)}>Choose</button>
      </div>
    </div>
  )
}

export default PlayerProfileCard