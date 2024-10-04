import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="header">
            <div className="logo">
                <span className="logo-text">WAgency.</span>
            </div>
            <nav className="nav-links">
                <a href="#services">Service</a>
                <a href="#portfolios">Portfolios</a>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
            <button className="cta-button">Start a Project?</button>
            </nav>
        </header>
    );
};

export default Navbar;