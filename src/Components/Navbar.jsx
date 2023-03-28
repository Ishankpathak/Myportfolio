import React, { useState } from 'react'
import { NavLink  } from 'react-router-dom'

const Navbar = () => {
  // const [mode , setmode] = useState(false)
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark text-lg">
  <div className="container-fluid">
    <div className="navbar-brand" >Ishank Pathak</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  align-items-center " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2  align-items-center mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/skills">Skills</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/projects">Projects</NavLink>
        </li>
        
       {/* <button className=' bg-dark border-0  ' style={{fontSize:"2rem"}} onClick={()=>setmode(!mode)}> {
        mode?<div>🌞</div>:<div>🌙</div>
       } </button>  */}

      </ul>
    
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar


