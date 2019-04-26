import React from 'react'

const CreateTeamForm = (props) => {

  //on submit this will post a new team to all teams in the db, which will update state and send user back to discover

  return (
    <div>
      <h2>Create Team Form</h2>
      <form>
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