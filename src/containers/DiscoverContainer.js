import React, { Component } from 'react'

class DiscoverContainer extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h1>Discover</h1>
        <button onClick={() => this.props.goHome()}>Home</button>
      </div>
    )
  }
}

export default DiscoverContainer