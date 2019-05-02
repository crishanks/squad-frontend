import React, { Component } from 'react'

class LoginForm extends Component {
  constructor(props) {
    super(props)

  }

  //onSubmit requests the user that matches the credentials and renders the discover component (changes state to showCreateProfile to false, and loggedIn to true)

  handleFormSubmit = (ev) => {
    console.log('clicked login handle submit', ev.target.username.value)
    ev.preventDefault()
    this.props.requestAccessToken(ev)
  }

  render() {
    return (
      <div id="login-form-container">
          <form id="login-form" onSubmit={(ev) => this.handleFormSubmit(ev)}>
            <div className='logo'>SQUAD</div>
            <div className="username-input">
              <label>Username</label>
              <input type="text" name="username"/>
            </div>
            <div className="password-input">
              <label>Password</label>
              <input type="password" name="password"/>
            </div>
            <div className="submit-button">
              <input type="submit" value="Submit"/>
            </div>
          </form>
          <div clasName="home-button" onClick={this.props.logout}>Home</div>
      </div>
    )
  }
}

export default LoginForm