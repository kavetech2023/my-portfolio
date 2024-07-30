import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src="https://via.placeholder.com/150" alt="" />
                <p>I have 10 years ofexperience in software Engineering.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <span>user icon here</span>
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    &copy; 2021 All rights reserved
                </div>
                <div className="footer-bottom-right">
                    <p>terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    
  )
}

export default Footer