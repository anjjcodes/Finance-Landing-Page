import React from "react";
import "./Team.css";
import { team_list } from "../../assets/assets";
import orange from './81.png'

const Team = () => {
  return (
    <div>
      <div className="team-container">
        <div className="team-top">
          <div className="top-left">
            <p className="why">Why Should Us?</p>
            <h1 className="team-head">
              We are the team of enthusiasts
            </h1>
          </div>
          <div className="top-right">
            <p className="rightpara">
              Our technology suite is engineered to support diverse business
              needs on-demand. <br></br>Our communal culture, performance excellence and
              private cloud technology paves the way for unprecedented customer
              support.
            </p>
            <button className="explore">Explore</button>
          </div>
        </div>
        <div className="team-bottom">
            {team_list.map((ele,index) => {
                return(
                    <div className="bottom-containers">
                        <div className="each">
                            <img src={ele.timg} alt="" className="timage" />
                            <h4 className="thead">{ele.thead}</h4>
                            <p className="tpara">{ele.tpaar}</p>
                        </div>
                    </div>
                )
            })  }
        </div>
      </div>
      <div className="orange-bg2">
        <img src={orange} alt="" className="orange" />
      </div>
    </div>
  );
};

export default Team;
