import React from 'react'

const TeamProfileCard = (props) => {
  return (
    <div className="team-profile-card-image">
      <div className="team-profile-card-text">
        <h3>{props.team.name}</h3>
        <p>{props.team.location}</p>
        <p>{props.team.league}</p>
      </div>
    </div>
  )
}

export default TeamProfileCard