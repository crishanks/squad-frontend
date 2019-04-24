import React, { Component } from 'react'
import FacebookLoginButton from '../components/FacebookLoginButton'

const WelcomeBanner = (props) => {
  return (
    <div className='hero-image'>
      <div className='hero-text'>
        <h1>Squad</h1>
        <p>Team Up</p>
        <button>Sign Up</button>
        <FacebookLoginButton login={props.handleLoginClick} state={props.state}/>
      </div>
    </div>
  )
}

export default WelcomeBanner