// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { login } from '../actions/homescreenActions'
import { logout } from '../actions/homescreenActions'
import { signup } from '../actions/homescreenActions'
import { toggleShowLoginForm } from '../actions/homescreenActions'
import { toggleShowProfileContainer } from '../actions/homescreenActions'
import { createTeam } from '../actions/homescreenActions'


// Components
import WelcomeBanner from '../components/WelcomeBanner'
import DiscoverContainer from './DiscoverContainer'
import CreateProfileForm from '../components/CreateProfileForm'
import LoginForm from '../components/LoginForm'
import ProfileContainer from './ProfileContainer'
import CreateTeamContainer from './CreateTeamContainer'

class HomeScreenContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    //request access token, fetch players, fetch teams
  }

  // requestAccessToken = () => {
  //   request_params = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     },
  //     body: JSON.stringify({
  //       player: {
  //         username: this.props.currentPlayer.username,
  //         password: this.props.currentPlayer.password
  //       }
  //     })
  //   }
  //   fetch()
  // }

  renderComponents = () => {
    console.log(' homescreen render components props', this.props)
    if (this.props.loggedIn && this.props.showProfileContainer) {
      return <ProfileContainer loginClick={this.props.login} showCreateTeamForm={this.props.createTeam}/>
    } else if (this.props.loggedIn && this.props.showCreateTeamForm) {
      return <CreateTeamContainer/>
    } else if (this.props.showCreateProfileForm) {
      return <CreateProfileForm loginClick={this.props.login}/>
    } else if (this.props.showLoginForm) {
      return <LoginForm loginClick={this.props.login}/>
    } else if (!this.props.loggedIn && !this.props.showCreateProfileForm && !this.props.showLoginForm) {
      return <WelcomeBanner showLoginFormClick={this.props.toggleShowLoginForm} signupClick={this.props.signup}/>
    } else if (this.props.loggedIn) {
      return <DiscoverContainer logoutClick={this.props.logout} showProfileContainer={this.props.toggleShowProfileContainer}/>
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
    showLoginForm: state.homescreenReducer.showLoginForm,
    currentPlayer: state.homescreenReducer.currentPlayer,
    showCreateProfileForm: state.homescreenReducer.showCreateProfileForm,
    showProfileContainer: state.homescreenReducer.showProfileContainer,
    showCreateTeamForm: state.homescreenReducer.showCreateTeamForm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
    signup: () => dispatch(signup()),
    toggleShowLoginForm: () => dispatch(toggleShowLoginForm()),
    toggleShowProfileContainer: () => dispatch(toggleShowProfileContainer()),
    createTeam: () => dispatch(createTeam())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer)