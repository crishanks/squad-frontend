import React, { Component } from 'react'

class LoginForm extends Component {
  constructor(props) {
    super(props)

  }

  //onSubmit requests the user that matches the credentials and renders the discover component (changes state to showCreateProfile to false, and loggedIn to true)

  handleFormSubmit = (ev) => {
    ev.preventDefault()
    this.props.requestAccessToken(ev)
  }

  render() {
    return (
      <div id="login-form-container">
          <form id="login-form" onSubmit={(ev) => this.handleFormSubmit(ev)}>
            <div className='logo' onClick={this.props.logout}>SQUAD</div>
            <div className="username-input">
              <input type="text" name="username" placeholder="username"/>
            </div>
            <div className="password-input">
              <input type="password" name="password" placeholder="password"/>
            </div>
            <div className="submit-button">
              <input type="submit" value="SUBMIT"/>
            </div>
          </form>
      </div>
    )
  }
}

export default LoginForm