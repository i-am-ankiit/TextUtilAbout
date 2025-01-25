import React from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props){
  return(
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
    <div className="container-fluid"> 
      <Link className="navbar-brand" to="/" style={{color:props.mode==='dark'?'white':'black'}}>NavBar</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/" style={{color:props.mode==='dark'?'white':'black'}}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" style={{color:props.mode==='dark'?'white':'black'}}>About</Link>
          </li>
        </ul>
      </div>
    </div>
  
  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.toggleMode}/>
    <label style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', paddingRight: '20px' }} className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.mode==='light'?"Enable Dark Mode":"Disable Dark Mode"}`}</label>
  </div>
  </nav>

  )
}

 Navbar.propTypes = {
  title2: PropTypes.string,
  search2: PropTypes.string
 }