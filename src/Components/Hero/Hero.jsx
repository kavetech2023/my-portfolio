import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src="https://via.placeholder.com/150" alt="hero" />
        <h1><span>I'm Kevin Kavete,</span> a frontend developer based in USA.</h1>
        <p>I have 10+ years of experience in market manipulation.</p>
        <div className="hero-action">
            <div className="hero-connect">
            <AnchorLink className='anchor-link' offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Connect with me</p></AnchorLink>
                
            </div>
            <div className="hero-resume">
                My Resume
            </div>
        </div>
    </div>
  )
}

export default Hero