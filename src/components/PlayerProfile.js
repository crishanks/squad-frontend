import React from 'react'
// import PlayerProfileCard from './PlayerProfileCard'

const PlayerProfile = (props) => {

  //buttons need to do a patch request to update the current user's showTeams column.

  const renderTeammates = () => {
    //Need to get choose player to actually add teammates to player's team
    console.log('renderTeammates props', props)
    return props.currentPlayer.player.team_players.map(teammate => {
      return (
        <div>
          <h3>Render Teammate {teammate.id}</h3>
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