import React, { useState } from 'react'

import './Login.css'
import facebook from '../img/fb.png'
import twitter from '../img/tw.png'
import google from '../img/gp.png'

const Login = () => {
  const [ options, SetOptions ] = useState('login')

  return (
    <div className="hero">
      <div className="form-box">
        <div className="button-box">
          { options === 'login' && <div id="btn-login" /> } 
          { options === 'register' && <div id="btn-register" /> }
          <button type="button" className="toggle-btn" onClick={() => SetOptions('login')}>Log In</button>
          <button type="button" className="toggle-btn" onClick={() => SetOptions('register')}>Register</button>
        </div>
        <div className="social-icons">
          <img src={facebook} alt="..." />
          <img src={twitter} alt="..." />
          <img src={google} alt="..." />
        </div>
        { options === 'login' &&
          <form id="login" className="input-group">
            <input type="text" className="input-field" placeholder="User Id" required />
            <input type="text" className="input-field" placeholder="Enter Password" required />
            <input type="checkbox" className="check-box" /><span>Remember Password</span>
            <button type="submit" className="submit-btn">Log In</button>
          </form>
        }
        { options === 'register' &&
          <form id="register" className="input-group">
            <input type="text" className="input-field" placeholder="User Id" required />
            <input type="text" className="input-field" placeholder="Email id" required />
            <input type="text" className="input-field" placeholder="Enter Password" required />
            <input type="checkbox" className="check-box" /><span>I agree to the terms & conditions</span>
            <button type="submit" className="submit-btn">Register</button>
          </form>
        }
      </div>
    </div>
  )
}

export default Login