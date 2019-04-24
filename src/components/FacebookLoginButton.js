import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export default class FacebookLoginButton extends Component {

  render() {
    let fbContent = null
    return (
      this.props.state.isLoggedIn ? fbContent = null : fbContent = <FacebookLogin
      appId="1646141628852223"
      autoLoad={true}
      fields="name,email,picture"
      callback={(response) => this.props.login(response)} 
      />
    )
  }
}