import React from 'react'
import './Home.css'
import homeimg from './home-img.png'
import img1 from './img1.png'
import img2 from './img2.png'
import bg1 from './bg1.png'
import bg2 from './bg2.png'
import orange from './80.png'
import under from './Vector.png'

const Home = () => {
  return (
    <div>
        <div className="container">
            <div className="extra">
                <img src={bg2} alt="" className="bg1" />
                <img src={bg1} alt="" className="bg2" />
            </div>
            <div className="home-left">
                <img src={homeimg} alt="" className="homeing" />
            </div>
            <div className="home-right">
                <h1 className='home-heading'>Managing investments <br></br> has never been easier</h1>
                <img src={under} alt="" className="underline" />
                <p className='home-para'>Investment management refers to the handling of financial assets and other <br></br> investments-not only buying and selling them.</p>
                <button className="rich">Let's Get Rich</button>
                <p className='reg'>Registered and supervised by:</p>
                <div className="brands">
                    <img src={img1} alt="" className="brand-imgs1" />
                    <img src={img2} alt="" className="brand-imgs2" />
                </div>

            </div>
        </div>
        <div className="orange-bg">
            <img src={orange} alt="" className="orange" />
        </div>
      
    </div>
  )
}

export default Home
