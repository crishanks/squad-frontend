import React from 'react'

const ProfileBar = (props) => {
  return (
    <div id="profile-bar-container">
      <div className="profile-bar-item" onClick={props.showProfileContainer}>My Profile</div>
      <div className="profile-bar-item">Logout</div>
      <div className="profile-bar-item">Discover</div>
    </div>
  )
}

export default ProfileBar