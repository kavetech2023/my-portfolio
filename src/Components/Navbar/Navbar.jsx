import React ,{useState}from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
        <span>Logo</span>
        <ul className="nav-menu">
            <li><AnchorLink className='anchor-link' offset={50} href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<span>_</span>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href="#about"><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<span>_</span>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href="#services"><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<span>_</span>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href="#work"><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<span>_</span>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<span>_</span>:<></>}</li>
        </ul> 
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Connect with Me</p></AnchorLink></div>
    </div>
  )
}

export default Navbar