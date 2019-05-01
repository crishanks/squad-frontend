import React, { Component } from 'react'

class LoginForm extends Component {
  constructor(props) {
    super(props)

  }

  //onSubmit requests the user that matches the credentials and renders the discover component (changes state to showCreateProfile to false, and loggedIn to true)

  handleFormSubmit = (ev) => {
    console.log('clicked login handle submit', this.props.currentPlayer)

    ev.preventDefault()
    return this.props.requestAccessToken(ev)
  }

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={(ev) => this.handleFormSubmit(ev)}>
          <label>Username</label>
          <input type="text" name="username"/>
          <label>Password</label>
          <input type="password" name="password"/>
          <input type="submit" value="Submit"/>
        </form>
        <button onClick={this.props.logout}>Home</button>
      </div>
    )
  }
}

export default LoginForm