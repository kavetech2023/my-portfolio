import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Contact Me</h1>
            <span></span>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently available to take on new projects, so feel free to contact me.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <span>icon</span>
                        <p>kavetech@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <span>icon</span>
                        <p>+254 798566564</p>
                    </div>
                    <div className="contact-detail">
                        <span>icon</span>
                        <p>CA, United States</p>
                    </div>
                </div>
                
            </div>
                <form className='contact-right' action="">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name="name"/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name="email" />
                    <label htmlFor="">Write your Message Here:</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                    <button className="contact-submit" type="submit"></button>
                </form>
        </div>
    </div>
  )
}

export default Contact