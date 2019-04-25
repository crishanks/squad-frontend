// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { login } from '../actions/homescreenActions'
import { logout } from '../actions/homescreenActions'
import { signup } from '../actions/homescreenActions'


// Components
import WelcomeBanner from '../components/WelcomeBanner'
import DiscoverContainer from './DiscoverContainer'
import CreateProfileForm from '../components/CreateProfileForm'

class HomeScreenContainer extends Component {
  constructor(props) {
    super(props)
  }

  renderComponents = () => {
    console.log('render components', this.props)
    if (this.props.loggedIn) {
      return <DiscoverContainer logoutClick={this.props.logout}/>
    } else if (this.props.showCreateProfileForm) {
      return <CreateProfileForm loginClick={this.props.login}/>
    } else if (!this.props.loggedIn && !this.props.showCreateProfileForm) {
      return <WelcomeBanner loginClick={this.props.login} signupClick={this.props.signup}/>
    }
  }

  render() {
    console.log('hsc props', this.props)
    console.log('hsc state', this.state)

  return (
      <div>
        {this.renderComponents()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('hs mapstatetoprops state', state)
  return {
    loggedIn: state.homescreenReducer.loggedIn,
    user: state.homescreenReducer.user,
    showCreateProfileForm: state.homescreenReducer.showCreateProfileForm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
    signup: () => dispatch(signup())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer)