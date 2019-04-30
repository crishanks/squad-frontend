import React from 'react'

// import { declinePlayer } from '../actions/homescreenActions'


const PlayerProfileCard = (props) => {
  // add columns to player for teams and players to choose from and do a patch request to remove?
  // or can keep as removing from state? If so, need to create handleclick for choose player that does both choosePlayer and removes player from allPlayers array.....

  const handleChoosePlayer = () => {
    //need to set the team players array state with the new player
    props.associatePlayerWithTeam(props.player)
    props.declinePlayer(props.player)
  }

  return (
    <div id="player-card-container">
      <div id="picture">
        <img id="profile-image" src="" alt=""/>
      </div>
      <div id="name-box">
        <div>
          {props.player.name}, 28
        </div>
        <div className="header">{props.player.position}</div>
        <div>{props.player.height}</div>
        <div>{props.player.experience_level}</div>
      </div>
      <div id="description">
        <p>{props.player.description}</p>
      </div>
      <div id="footer">
        <div className="circle" id="decline-circle" onClick={() => props.declinePlayer(props.player)}></div>
        <div className="circle" id="accept-circle" onClick={(props) => handleChoosePlayer(props)}>
        </div>
      </div>
    </div>
  )
}

export default PlayerProfileCard

    {/* <div className="player-profile-card-image">
      <img src={props.player.image} alt="player image"/>
      <div className="player-prifoile-card-info">
        <h1>{props.player.name}</h1>
        <p>{props.player.height}</p>
        <p>{props.player.position}</p>
        <p>{props.player.experience_level}</p>
        <p>{props.player.description}</p>
        <button onClick={() => props.declinePlayer(props.player)}>Decline</button>
        <button onClick={(props) => handleChoosePlayer(props)}>Choose</button>
      </div>
    </div> */}