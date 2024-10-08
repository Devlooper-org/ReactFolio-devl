import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import RepeatPhrase from './components/RepeatPhrase';
import Analytics from './components/Analytics';
import Services from './components/Services';
import Work from './components/Work'
import Brand from './components/Brand';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

const Hero = () => {
    return (
      <div className='App'>
        <header className="hero-section">
          <Navbar/>
            <div className="hero-content">
              <h1>Real Agency<br/>With Its Super<br/><span>Digital</span></h1>
              <p>Let's start discussing your project</p>
            </div>
            <div className='whyus'>
              {/* <h1>WhyUs?</h1> */}
              <img src="src/Untitled design.png" alt="" />
            </div>

            <RepeatPhrase/>
        </header>
            <Analytics/>
            <Services/>
            <Work/>
            <Brand/>

            <div className='Discussion'>
              <p>Let's <span className='works'>Works</span> <br />Together<br />Let's <span className='creative'>Creative</span></p>
            </div>

            <Footer/>
      </div>      
    );
};

export default Hero;