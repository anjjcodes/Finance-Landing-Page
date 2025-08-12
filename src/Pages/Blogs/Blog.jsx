import React from "react";
import "./Blog.css";
import img from "./main.png";
import { blog_list } from "../../assets/assets";

const Blog = () => {
  return (
    <div>
      <div className="blog-container">
        <div className="blog-top">
          <p className="blogs">Blogs</p>
          <h1 className="blogsh1">
            Important Concepts and Topics on <br></br> Finance and Financial Analysis.
          </h1>
        </div>
        <div className="main-blog">
          <div className="main-left">
            <p className="invest">INVESTMENT</p>
            <h1 className="finra">
              Financial Industry Regulatory Authority <br></br> (FINRA)
            </h1>
            <p className="finrap">
              The Financial Industry Regulatory Authority (or FINRA) is a
              non-<br></br>govermental organization that..
            </p>
            <button className="read-more">Read More</button>
          </div>
          <div className="main-right">
            <img src={img} alt="" className="img" />
          </div>
        </div>
        <div className="main-bottom">
          {blog_list.map((ele, index) => {
            return (
              <div className="main-bot">
                <p className="bname">{ele.bname}</p>
                <h1 className="bdesc">{ele.bdesc}</h1>
                <img src={ele.bimg} alt="" className="bimg" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
