import React, { Component } from 'react'

class LoginForm extends Component {
  constructor(props) {
    super(props)

  }

  //onSubmit requests the user that matches the credentials and renders the discover component (changes state to showCreateProfile to false, and loggedIn to true)

  handleFormSubmit = (ev) => {
    console.log('login form ev target', ev.target)
    ev.preventDefault()
    this.props.requestAccessToken(ev)
    this.props.loginClick()
  }

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={(ev) => this.handleFormSubmit(ev)}>
          <label htmlFor="">Username</label>
          <input type="text" name="username"/>
          <label htmlFor="">Password</label>
          <input type="text" name="password"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default LoginForm