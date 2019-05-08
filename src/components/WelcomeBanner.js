import React from 'react'


const WelcomeBanner = (props) => {
  return (
    <div id="welcome-banner-container">
      <h1 id="welcome-logo">SQUAD</h1>
      <div id="welcome-signup" onClick={props.signupClick}>Sign Up</div><br/>
      <div id="welcome-login" onClick={props.showLoginFormClick}>Log In</div>
    </div>
  )
}

export default WelcomeBanner