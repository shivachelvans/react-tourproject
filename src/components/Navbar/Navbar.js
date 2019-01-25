import React from 'react'
import logo from '../../logo.png';
import './Navbar.scss';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="logodesign"></img>
        <ul className="nav-links">
            <li><a href="/" className="nav-link active">Home</a></li>
            <li><a href="/" className="nav-link">About</a></li>
            <li><a href="/" className="nav-link">Services</a></li>
            <li><a href="/" className="nav-link">Contact</a></li>
            <li><a href="/" className="nav-link">Tours</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
