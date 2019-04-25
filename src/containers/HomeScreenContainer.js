// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { login } from '../actions/homescreenActions'
import { logout } from '../actions/homescreenActions'


// Components
import WelcomeBanner from '../components/WelcomeBanner'
import DiscoverContainer from './DiscoverContainer'

class HomeScreenContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('hsc props', this.props)
    console.log('hsc state', this.state)

  return (
      <div>
        {this.props.loggedIn ? <DiscoverContainer logoutClick={this.props.logout}/> : <WelcomeBanner loginClick={this.props.login}/>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('hs mapstatetoprops state', state)
  return {
    loggedIn: state.homescreenReducer.loggedIn,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer)