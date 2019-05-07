import React from 'react'


const WelcomeBanner = (props) => {
  return (
    <div id="welcome-banner-container">
      <div className='hero-content'>
          <h1 className="logo">SQUAD</h1>
          <div id="welcome-inputs">
            <div onClick={props.signupClick}>Sign Up</div><br/>
            <div onClick={props.showLoginFormClick}>Log In</div>
          </div>
      </div>
    </div>
  )
}

export default WelcomeBanner