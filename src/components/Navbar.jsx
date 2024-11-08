import React from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const handleNav = () => {
      setIsNavOpen(!isNavOpen);

    };
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          const targetElement = document.querySelector(this.getAttribute('href'));
          const navbarHeight = document.querySelector('.navbar').offsetHeight + 25;
          window.scrollTo({
              top: targetElement.offsetTop - navbarHeight,
              behavior: 'smooth'
          });
      });
  });
    return (
        <>
        <div className={`overlay d-md-none ${isNavOpen? 'show' : ''}`} onClick={handleNav}></div>
        <div className={`sidenav p-3 d-md-none ${isNavOpen? 'show' : ''}`}>
            <div className='d-flex'>
                <button className='btn btn-outline-light ms-auto' onClick={handleNav}><FontAwesomeIcon icon={faTimes} /></button>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <a href="#root" className='whiteanch my-2'>Home</a>
                <a href="#services" className='whiteanch my-2'>Service</a>
                <a href="#portfolios" className='whiteanch my-2'>Portfolios</a>
                <a href="#work" className='whiteanch my-2'>Work</a>
                <a href="#contact" className='whiteanch my-2'>Contact</a>
                <a href="#blog" className='whiteanch my-2'>Blog</a>
            </div>
        </div>
        <div className={`navbar-placeholder ${isScrolled ? 'show' : ''}`}></div>
        <nav className={`navbar w-100 px-3 ${isScrolled ? 'show' : ''}`}>
            <div className="logo">
                <span className="logo-text ms-2">Devlooper</span>
            </div>
            <nav className="nav-links d-none d-md-block">
                <a href="#services">Service</a>
                <a href="#portfolios">Portfolios</a>
                <a href="#work">Work</a>
                <a href="#blog">Blogs</a>
            <a className="nav-button" href='#contact'>
            Start a Project?
            </a>
            </nav>
            <button className='btn btn-light d-md-none' onClick={handleNav}><FontAwesomeIcon icon={faBars}  size="2x" /></button>
        </nav>
        </>
    );
};

export default Navbar;