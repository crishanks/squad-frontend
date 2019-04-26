import React, { Component } from 'react'

class LoginForm extends Component {
  constructor(props) {
    super(props)

  }

  //onSubmit requests the user that matches the credentials and renders the discover component (changes state to showCreateProfile to false, and loggedIn to true)

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.props.loginClick}>
          <label htmlFor="">Username</label>
          <input type="text" name="login-username"/>
          <label htmlFor="">Password</label>
          <input type="text" name="login-password"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default LoginForm