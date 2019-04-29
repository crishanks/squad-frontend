import React, { Component } from 'react'

import TeamProfileCard from '../components/TeamProfileCard'

class TeamProfileCardsContainer extends Component {
  constructor(props) {
    super(props)
  }

  // method to map over all teams and render all team profile cards. view one at a time like sushi

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