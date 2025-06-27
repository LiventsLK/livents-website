import React from "react";
import './navbar.scss';

function Navbar() {
  return (
    <nav className="navbar-container">
        <div className="navbar-wrapper">
            <div className="logo-wrapper">
                <img src="src\assets\navbar-logo.svg" alt="" />
            </div>
            <div className="navbar-links">
                <a href="#about">Home</a>
                <a href="#services">About</a>
                <a href="#contact">Services</a>
                <a href="#contact">Gallery</a>
            </div>
            <button className="contact-btn">
                Contact us
            </button>
        </div>
    </nav>
  );
}

export default Navbar;