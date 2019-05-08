import React from 'react'

const ProfileBar = (props) => {
  return (
    <div id="profile-bar-container" className="flex-center">
      <img src={props.currentPlayer.player.image} className="profile-bar-circle" onClick={props.showProfileContainer}/>
      <div>SQUAD</div>
      <div className="profile-bar-logout flex-center" onClick={props.logout}>Logout</div>
    </div>
  )
}

export default ProfileBar