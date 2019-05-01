import React from 'react'
// import PlayerProfileCard from './PlayerProfileCard'

const PlayerProfile = (props) => {

  const renderTeammates = () => {
    const myTeam = props.allTeams.find(team => props.currentTeam)
    const teammates = myTeam.players
    console.log('renderTeammates props', props)
    console.log('renderTeammates teammates', teammates)
    return teammates.map(teammate => {
      return (
      <div id="teammate-card-container">
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
    <div>
      <div>
        <h2>Profile</h2>
        <button onClick={props.login}>Go to Discover</button> 
        {/* <button onClick={props.showCreateTeamForm}>Create Team</button> */}
        {/* <button onClick={props.showTeams}>Find Teams</button> */}
        {/* <button onClick={props.showPlayers}>Find Players</button> */}
      </div>
      <div>
        <h2>My Team</h2>
        {renderTeammates()}
      </div>
    </div>
  )
}

export default PlayerProfile