import React, { Component } from 'react'

class CreateProfileForm extends Component {
  constructor(props) {
    super(props)

  }

  //onSubmit posts to the api with a new user and renders the discover component (changes state to showCreateProfile to false, and loggedIn to true)

  render() {
    return (
      <div>
        <h1>Create Your Profile</h1>
        <form onSubmit={this.props.loginClick}>
          <label htmlFor="">First Name</label>
          <input type="text" name="first-name"/>
          <label htmlFor="">Last Name</label>
          <input type="text" name="last-name"/>
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
          <select name="experience-level">
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