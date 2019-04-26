import React, { Component } from 'react'

import PlayerProfile from '../components/PlayerProfile'

class ProfileContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>In Profile Container</h1>
        <PlayerProfile login={this.props.loginClick}/>
      </div>
    )
  }
}

export default ProfileContainer