import React from 'react'

const CreateTeamForm = (props) => {

  //on submit this will post a new team to all teams in the db, which will update state and send user back to discover

  const handleSubmit = (ev) => {
    ev.preventDefault()
    props.createTeam(ev)
  }

  return (
    <div>
      <h2>Create Team Form</h2>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <label>Team Name</label>
        <input type="text" name="teamname"/>
        <label>Location</label>
        <input type="text" name="location"/>
        <label>League</label>
        <input type="text" name="league"/>
        <input type="submit" value="Create Team"/>
      </form>
    </div>
  )
}

export default CreateTeamForm