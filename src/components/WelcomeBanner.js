import React from 'react'


const WelcomeBanner = (props) => {
  return (
    <div id="welcome-banner-container">
      <div className='hero-content'>
          <h1>SQUAD</h1>
          <button onClick={props.signupClick}>Sign Up</button>
          <button onClick={props.showLoginFormClick}>Log In</button>
      </div>
    </div>
  )
}

export default WelcomeBanner