import React, { Component } from 'react'

const JWT_API = "http://localhost:3000/api/v1/login"
const PLAYERS_API = "http://localhost:3000/api/v1/players"

class CreateProfileForm extends Component {
  constructor(props) {
    super(props)

  }

  //onSubmit posts to the api with a new user and renders the discover component (changes state to showCreateProfile to false, and loggedIn to true)

  requestAccessToken = (ev) => {
    // console.log('request token ev', ev.target.username.value)
    return fetch(JWT_API, 
     { method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        player: {
          username: ev.target.username.value,
          password: ev.target.password.value
        }
      })}
    )
    .then((response) => {return response.json()})
    .then((json) => {
      // console.log('create profile json', json)
      localStorage.setItem('token', json.jwt)
    })
    .then(this.props.loginClick())
  }

  createPlayer = (ev) => {
    // console.log('create player event target', ev.target.username.value)
    const requestParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: ev.target.firstname.value + ' ' + ev.target.lastname.value,
        image: ev.target.image.value,
        showTeams: false,
        username: ev.target.username.value,
        password: ev.target.password.value,
        height: ev.target.height.value,
        position: ev.target.position.value,
        experience_level: ev.target.experiencelevel.value,
        description: ev.target.bio.value
      })
    }
    fetch(PLAYERS_API, requestParams)
    .then(this.requestAccessToken(ev))
  }

  handleSubmit = (ev) => {
    // console.log('handlesubmit ev', ev.target)
    ev.preventDefault()
    this.createPlayer(ev)
  }

  render() {
    return (
      <div>
        <h1>Create Your Profile</h1>
        <form onSubmit={(ev) => this.handleSubmit(ev)}>
          <label htmlFor="">First Name</label>
          <input type="text" name="firstname"/>
          <label htmlFor="">Last Name</label>
          <input type="text" name="lastname"/>
          <label htmlFor="">Username</label>
          <input type="text" name="username"/>
          <label htmlFor="">Password</label>
          <input type="text" name="password"/>
          <label htmlFor="">Profile Image URL</label>
          <input type="text" name="image"/>
          <label htmlFor="">Height</label>
          <input type="text" name="height"/>
          <label htmlFor="">Position</label>
          <input type="text" name="position"/>
          <label htmlFor="">Experience Level</label>
          <select name="experiencelevel">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <label htmlFor="">Bio</label>
          <textarea name="bio" cols="30" rows="10"></textarea>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default CreateProfileForm