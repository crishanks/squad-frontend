import React, { Component } from 'react'

class DiscoverContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('discover props', this.props)
    return (
      <div>
        <h1>Discover</h1>
        <button onClick={this.props.logoutClick}>Home</button>
      </div>
    )
  }
}

export default DiscoverContainer