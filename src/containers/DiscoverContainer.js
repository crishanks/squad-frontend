// Libraries
import React, { Component } from 'react'

// Components
import CandidatesContainer from './CandidatesContainer'
import ProfileBar from '../components/ProfileBar'
import Footer from '../components/Footer'

class DiscoverContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="discover-page">
        <ProfileBar showProfileContainer={this.props.showProfileContainer} logout={this.props.logout} currentPlayer={this.props.currentPlayer}/>
        <CandidatesContainer 
          /* currentPlayer={this.props.currentPlayer}
          currentTeam={this.props.currentTeam}
          allTeams={this.props.allTeams}
          allPlayers={this.props.allPlayers}
          declinePlayer={this.props.declinePlayer}
          declineTeam={this.props.declineTeam}
          fetchPlayersAndTeams={this.fetchAllPlayers} */
          /* addPlayerToCurrentTeam={this.props.addPlayerToCurrentTeam} */
        />
        <Footer />
      </div>
    )
  }
}

export default DiscoverContainer