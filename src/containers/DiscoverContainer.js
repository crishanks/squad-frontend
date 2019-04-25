import React, { Component } from 'react'

import MyInfoContainer from './MyInfoContainer'

class DiscoverContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('discover props', this.props)
    return (
      <div>
        <h1>Discover</h1>
        <button onClick={this.props.logoutClick}>Log Out</button>
        <MyInfoContainer />
      </div>
    )
  }
}

export default DiscoverContainer