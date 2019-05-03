import React from 'react'

const ProfileBar = (props) => {
  return (
    <div id="profile-bar-container" className="flex-center">
      <div className="profile-bar-circle" onClick={props.showProfileContainer}></div>
      <div>SQUAD</div>
      <div className="profile-bar-logout flex-center" onClick={props.logout}>Logout</div>
    </div>
  )
}

export default ProfileBar