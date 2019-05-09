import React, { Component } from 'react'

import TeamProfileCard from '../components/TeamProfileCard'

class TeamProfileCardsContainer extends Component {
  constructor(props) {
    super(props)
  }

  renderTeamProfileCards = (props) => {
    return props.allTeams.map(team => {
      return <TeamProfileCard team={team} key={team.id}/>
    })
  }

  render() {
    return (
      <div className="team-profile-cards-container">
        {this.renderTeamProfileCards()}
      </div>
    )
  }
}

export default TeamProfileCardsContainer