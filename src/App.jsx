import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";

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
        </header>
      </div>
      
    );
};

export default Hero;