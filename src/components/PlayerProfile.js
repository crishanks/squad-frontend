import React from 'react'

const PlayerProfile = (props) => {
  return (
    <div>
      <h2>Player Profile</h2>
      <button onClick={props.login}>Go to Discover</button>
      <button>Create Team</button>
      <button>Find Teams</button>
      <button>Find Players</button>
    </div>
  )
}

export default PlayerProfile