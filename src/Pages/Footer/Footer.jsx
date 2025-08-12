import React from 'react'
import './Footer.css'
import logo from './Logo (1).png'
import insta from './insta.png'
import fb from './fb.png'
import call from './call.png'
import img1 from './image 1.png'
import img2 from './image 2.png'

const footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-top">
            <div className="footer-tl">
                <img src={logo} alt="" className="logo" />
                <p className="address">Pacific Century Place 16/F SCBD Lot 10, Jl. Jend. Sudirman Kav. 52-53, Jakarta 12190</p>

            </div>
            <div className="footer-tr">
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Industries</li>
                    <li>About</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <li>FAQ</li>
                    <li>Community</li>
                    <li>Join the team</li>
                    <li>Legal stuff</li>
                    <li>Terms of service</li>
                </ul>
            </div>
            
        </div>
        <div className="footer-middle">
            <div className="icons">
                <img src={insta} alt="" className="iconimgs" />
                <img src={fb} alt="" className="iconimgs" />
                <img src={call} alt="" className="iconimgs" />
            </div>
            <div className="brand-imgs">
                <img src={img1} alt="" className="b1" />
                <img src={img2} alt="" className="b2" />
            </div>
        </div>
        
      </div>
      <div className="footer-down">
            <p className="copyright">Copyright @Fineace 2022. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default footer
