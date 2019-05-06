import React from 'react'


const WelcomeBanner = (props) => {
  return (
    <div id="welcome-banner-container">
      <div className='hero-content'>
          <h1>SQUAD</h1>
          <div onClick={props.signupClick}>Sign Up</div><br/>
          <div onClick={props.showLoginFormClick}>Log In</div>
      </div>
    </div>
  )
}

export default WelcomeBanner