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
        <div>
          <img src="" alt="image"/>
          <h3>{teammate.name}</h3>
          <p>{teammate.position}</p>
          <p>{teammate.height}</p>
          <p>{teammate.experience_level}</p>
          <p>{teammate.description}</p>
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