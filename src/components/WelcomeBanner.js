//Libraries
import React from 'react'
import { connect } from 'react-redux'

//Actions
import { toggleShowLoginForm } from '../actions/componentActions'
import { signup } from '../actions/componentActions'

const WelcomeBanner = (props) => {
  return (
    <div id="welcome-banner-container">
      <h1 id="welcome-logo">SQUAD</h1>
      <div id="welcome-signup" onClick={props.signup}>Sign Up</div><br/>
      <div id="welcome-login" onClick={props.toggleShowLoginForm}>Log In</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    toggleShowLoginForm: () => dispatch(toggleShowLoginForm()),
    signup: () => dispatch(signup())
  }
}

export default connect(null, mapDispatchToProps)(WelcomeBanner)