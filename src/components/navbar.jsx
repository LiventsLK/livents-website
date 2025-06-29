import React, { useState, useRef, useEffect} from 'react';
import './navbar.scss';
import liventslkLogo from '../assets/navbar-logo.svg';
import useOnClickOutside from '../hooks/useOnClickOutside';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();
    const hamburgerRef = useRef();

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
            setIsMenuOpen(false);
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, []); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useOnClickOutside(menuRef, hamburgerRef, () => setIsMenuOpen(false));
    // useOnClickOutside(menuRef, () => setIsMenuOpen(false));

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
                <button className="hamburger-menu ${isMenuOpen ? 'is-open' : ''}`}" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
                <div ref={menuRef} className={`mobile-nav-panel ${isMenuOpen ? 'is-open' : ''}`}>
                    <div className="mobile-nav-content">
                        <a href="#about" onClick={toggleMenu}>Home</a>
                        <div className="line"></div>
                        <a href="#services" onClick={toggleMenu}>About</a>
                        <div className="line"></div>
                        <a href="#contact" onClick={toggleMenu}>Services</a>
                        <div className="line"></div>
                        <a href="#contact" onClick={toggleMenu}>Gallery</a>
                    </div>
                </div>
            </div>
            
        </nav>
    );
}

export default Navbar;