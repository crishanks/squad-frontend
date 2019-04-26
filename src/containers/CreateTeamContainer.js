import React, { Component } from 'react'

import CreateTeamForm from '../components/CreateTeamForm'

class CreateTeamContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>In Create Team Container</h1>
        <CreateTeamForm />
      </div>
    )
  }
}

export default CreateTeamContainer