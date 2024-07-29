import React from 'react'
import './Work.css'
import { MdOutlineNavigateNext } from "react-icons/md";


const Work = () => {
  return (
    <div className='work'>
        <div className="work-title">
            <h1>My Latest Work</h1>
        </div>
        <div className="work-container">    
            <img src="https://via.placeholder.com/150" alt="" />
            <img src="https://via.placeholder.com/150" alt="" />
            <img src="https://via.placeholder.com/150" alt="" />
            <img src="https://via.placeholder.com/150" alt="" />
            <img src="https://via.placeholder.com/150" alt="" />
        </div>
        <div className="work-showmore">
            <p>Show More</p>
            <span><MdOutlineNavigateNext /></span>
        </div>
    </div>
  )
}

export default Work