import React from 'react'

const ProfileBar = (props) => {
  return (
    <div>
      <h3>Profile Bar</h3>
      <button onClick={props.showProfileContainer}>My Profile</button>
    </div>
  )
}

export default ProfileBar