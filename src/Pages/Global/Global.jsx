import React from 'react'
import './Global.css'
import frame from './Frame.png'
import underline from './Group.png'

const Global = () => {
  return (
    <div>
        <div className="global-container">
            <div className="global-top">
                <p className="global-p">We're Global</p>
                <h1 className="global-h1">Scale and adapt at the <br></br>speed of your business</h1>
                <img src={underline} alt="" className="circle" />
                <p className="under-p">Financial Illiteracy reasons damaged homes, college dropouts, dependency on<br></br> predatory lending (payday loans) and authorities benefits, fitness issues (stress, <br></br> depression, anxiety), bankruptcies, foreclosures, divorces, homelessness. 
                </p>
            </div>
            <div className="global-bottom">
                <div className="bottom-left">
                    <div className="global-info">
                        <h3 className="no">70,000+</h3>
                        <p className="info">Employees</p>
                    </div>
                    <div className="global-info">
                        <h3 className="no">30+</h3>
                        <p className="info">Countries</p>
                    </div>
                    <div className="global-info">
                        <h3 className="no">80+</h3>
                        <p className="info">Contact Centers</p>
                    </div>
                </div>
                <div className="bottom-right">
                    <img src={frame} alt="" className="frame" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Global
