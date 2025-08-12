import React from 'react'
import './Customer.css'
import { customer_list } from '../../assets/assets'

const Customer = () => {
  return (
    <div>
        <div className="cust-container">
            <div className="cust-top">
                <div className="cust-top-left">
                    <p className="whatwedo">What We Do</p>
                    <h1 className="cust-head">Customer experience transformation starts here</h1>

                </div>
                <div className="cust-top-right">
                    <p className="cust-right">
                        Financial Literacy through Character Development (ABCs of Wealth) is an innovative 
                        approach that provides a framework for combining character development with financial education,
                         in order to raise a generation that is mentored to become financially stable and independent, and 
                         to use various forms of WEALTH such as knowledge.
                    </p>
                </div>
            </div>
            <div className="cust-bottom">
                {customer_list.map((ele, index) => {
                    return(
                    <div className="cust-bottom-container">
                        <img src={ele.cimage} alt="" className="cimage" />
                        <h3 className="chead">{ele.chead}</h3>
                        <p className="cpara">{ele.cpara}</p>
                        <buttom className="cbut">{ele.cbutton}</buttom>
                    </div>
                    )
                })}
            </div>
        </div>
      
    </div>
  )
}

export default Customer
