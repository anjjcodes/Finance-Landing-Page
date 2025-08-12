import React from 'react'
import './Header.css'
import logo from './Logo.png'

const Header = () => {
  return (
    <div>
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" className="logo-img" />
            </div>
            <div className="options">
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Industries</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="buttons">
                <button className='each-button1'>Sign In</button>
                <button className='each-button2'>Sign Up</button>
            </div>
        </div>
      
    </div>
  )
}

export default Header
