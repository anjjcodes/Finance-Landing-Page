import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div>
      <div className="sub-content">
        <div className="sub-left">
          <p className="subp">Subscribe</p>
          <h1 className="subh1">Stay Informed never miss an update</h1>
        </div>
        <div className="sub-rigth ">
          <p className="subrp">
            Once each month we'll send you recent episodes of our Financial
            information<br></br> covering the optimization of digital technology and
            irresistible people delivering a great customer experience that
            impacts the bottom line.
          </p>
          <div className="subrb">
            <input type="text" className="email" placeholder="Email Address"/>
            <button className="subscribe">Subscribe</button>
            
          </div>
          <hr className="line"></hr>
          
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
