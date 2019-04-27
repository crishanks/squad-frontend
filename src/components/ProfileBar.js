import React from 'react'

const ProfileBar = (props) => {
  return (
    <div>
      <h1>Profile Bar</h1>
      <button onClick={props.showProfileContainer}>My Profile</button>
    </div>
  )
}

export default ProfileBar