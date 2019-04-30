import React from 'react'

const ProfileBar = (props) => {
  return (
    <div id="profile-bar-container" className="flex-center">
      <div className="profile-bar-item" onClick={props.showProfileContainer}>My Profile</div>
      <div className="profile-bar-item flex-center" onClick={props.logoutClick}>Logout</div>
    </div>
  )
}

export default ProfileBar