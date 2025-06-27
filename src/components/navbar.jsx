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
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
            <button className="contact-btn">
                Contact
            </button>
        </div>
    </nav>
  );
}

export default Navbar;