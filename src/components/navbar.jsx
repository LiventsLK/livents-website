import React from "react";
import './navbar.scss';
import liventslkLogo from '../assets/navbar-logo.svg';

function Navbar() {
  return (
    <nav className="navbar-container">
        <div className="navbar-wrapper">
            <div className="logo-wrapper">
                <img src={liventslkLogo} alt="LIVENTSLK Logo" />
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