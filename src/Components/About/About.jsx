import React from 'react'
import './About.css'

const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src="https://via.placeholder.com/150" alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src="https://via.placeholder.com/150" alt="" />
            </div>
            <div className="about-right">
                <div className="about-paragraph">
                    <p>I  am an experienced front end bla bla bla</p>
                    <p>My passion for frontend begun when</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>REACT JS</p><hr style={{width:"90%"}} />
                    </div>
                    <div className="about-skill">
                        <p>REACT JS</p><hr style={{width:"90%"}} />
                    </div>
                    <div className="about-skill">
                        <p>REACT JS</p><hr style={{width:"90%"}} />
                    </div>
                    <div className="about-skill">
                        <p>REACT JS</p><hr style={{width:"90%"}} />
                    </div>
                    <div className="about-skill">
                        <p>REACT JS</p><hr style={{width:"90%"}} />
                    </div>
                </div>
            </div>
        </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Years of experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>Projects completed.</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>Happy clients</p>
                </div>
            </div>
        </div>
    
  )
}

export default About