import React from 'react'


const WelcomeBanner = (props) => {
  return (
      <div className='hero-content'>
        <h1>Squad</h1>
        <p>Squad</p>
        <button onClick={props.signupClick}>Sign Up</button>
        <button onClick={props.showLoginFormClick}>Log In</button>
    </div>
  )
}

export default WelcomeBanner