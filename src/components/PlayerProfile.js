import React from 'react'

const PlayerProfile = (props) => {

  //buttons need to do a patch request to update the current user's showTeams column.

  return (
    <div>
      <div>
        <h2>Create Your Player</h2>
        <button onClick={props.login}>Go to Discover</button> 
        {/* <button onClick={props.showCreateTeamForm}>Create Team</button> */}
        {/* <button onClick={props.showTeams}>Find Teams</button> */}
        {/* <button onClick={props.showPlayers}>Find Players</button> */}
      </div>
      <div>
        <h2>Create Your Team</h2>

      </div>
    </div>
  )
}

export default PlayerProfile