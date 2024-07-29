import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <img src="https://via.placeholder.com/150" alt="hero" />
        <h1><span>I'm Kevin Kavete,</span> a frontend developer based in USA.</h1>
        <p>I have 10+ years of experience in market manipulation.</p>
        <div className="hero-action">
            <div className="hero-connect">
                Connect with me
            </div>
            <div className="hero-resume">
                My Resume
            </div>
        </div>
    </div>
  )
}

export default Hero