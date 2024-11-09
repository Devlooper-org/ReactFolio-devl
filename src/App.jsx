import React from 'react';
import './styles/App.css';
import Navbar from "./components/Navbar";
import Blog from './components/Blog';
import Whyus from './components/Whyus';
import Analytics from './components/Analytics';
import Services from './components/Services';
import Work from './components/Work'
import Brand from './components/Brand';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactSection from './components/ContactSection';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
    return (
      <div className='App'>
        <header className="hero-section pt-md-5 pt-none">
          <Navbar/>
          <div className='min-vh-100'>
            <div className="hero-content">
              <h1 className='main-lines'><span className='lower'>We Make<br/>What Makes </span>
              <span className='upper'>You<br />You</span>
              </h1>
              <a className='btn btn-outline-light mt-0 mt-md-3 px-3 py-2' href="#contact">let's Start <FontAwesomeIcon icon={faArrowAltCircleRight} className='ms-1'/></a>
            </div>
          </div>
        </header>
            {/* <Logos/> */}
            <Whyus/>
            <Analytics/>
            <Services/>
            <Work/>
            <Blog/>
            <Brand/>
            <ContactSection/>
            <div className='Discussion'>
             
            </div>

            <Footer/>
      </div>      
    );
};
const styles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
export default Hero;