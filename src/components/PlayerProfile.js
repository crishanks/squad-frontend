import React from 'react'

const PlayerProfile = (props) => {

  //buttons need to do a patch request to update the current user's showPlayersOrTeams column.

  return (
    <div>
      <h2>Player Profile</h2>
      <button onClick={props.login}>Go to Discover</button> 
      <button onClick={props.showCreateTeamForm}>Create Team</button>
      <button>Find Teams</button>
      <button>Find Players</button>
    </div>
  )
}

export default PlayerProfile