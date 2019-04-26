import React, { Component } from 'react'

import TeamProfileCard from '../components/TeamProfileCard'

class TeamProfileCardsContainer extends Component {
  constructor(props) {
    super(props)
  }

  // method to map over all teams and render all team profile cards. view one at a time like sushi

  render() {
    return (
      <div>
        <div>
          <h2>In Team Profile Cards Container</h2>
        <TeamProfileCard />
        </div>
      </div>
    )
  }
}

export default TeamProfileCardsContainer