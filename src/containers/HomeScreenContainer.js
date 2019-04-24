import React, { Component } from 'react'
import WelcomeBanner from '../components/WelcomeBanner'
import DiscoverContainer from './DiscoverContainer'

class HomeScreenContainer extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      userID: ''
    }
  }

  handleLoginClick = (response) => {
    this.setState({
      loggedIn: true,
      userID: response.userID
    })
  }

  handleGoHomeClick = () => {
    this.setState({
      loggedIn: false,
      userID: ''
    })
  }

  render() {
    return (
      <div>
        {this.state.loggedIn ? <DiscoverContainer goHome={this.handleGoHomeClick}/> : <WelcomeBanner handleLoginClick={this.handleLoginClick} state={this.state}/>}
      </div>
    )
  }
}

export default HomeScreenContainer