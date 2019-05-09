//Libraries
import React from 'react'
import { connect } from 'react-redux'

//Actions
import { toggleShowProfileContainer } from '../actions/componentActions'
import { logout } from '../actions/componentActions'


const ProfileBar = (props) => {
  return (
    <div id="profile-bar-container" className="flex-center">
      <img src={props.currentPlayer.player.image} className="profile-bar-circle" onClick={props.toggleShowProfileContainer}/>
      <div>SQUAD</div>
      <div className="profile-bar-logout flex-center" onClick={props.logout}>Logout</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentPlayer: state.playerReducer.currentPlayer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleShowProfileContainer: () => dispatch(toggleShowProfileContainer()),
    logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBar)