import React from 'react'

// import PlayerProfileCard from './PlayerProfileCard'

const PlayerProfile = (props) => {

  const renderTeammates = () => {
    // debugger
    console.log("RENDER TEAMMATES PROPS", props)
    const myTeam = props.allTeams.find(team => team.id === props.currentTeam.id)
    const teammates = myTeam.players
    console.log('renderTeammates myteam', myTeam)
    console.log('renderTeammates teammates', teammates)
    return teammates.map(teammate => {
      return (
      <div id="teammate-card">
        <div id="picture">
          <img id="profile-image" src="" alt=""/>
        </div>
        <div id="name-box">
          <div className="header">{teammate.name}, 28</div>
          <div>Position {teammate.position}</div>
          <div>Height {teammate.height}</div>
          <div>Experience {teammate.experience_level}</div>
        </div>
        <div id="description-box">
          <div>{teammate.description}</div>
        </div>
      </div>
      )
    })
  }

  return (
    <>
    <div id="player-info-container">
      <div id="player-info">Player Profile Info Here</div>
      <div id="teammates-header">My Team</div>
      <div className="discover-button" onClick={props.login}>Discover</div>
    </div> 
    <div id="teammate-cards-container">
      {renderTeammates()}
    </div>
    </>
  )
}

export default PlayerProfile

      {/* <button onClick={props.showCreateTeamForm}>Create Team</button> */}
      {/* <button onClick={props.showTeams}>Find Teams</button> */}
      {/* <button onClick={props.showPlayers}>Find Players</button> */}