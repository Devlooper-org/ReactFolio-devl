import React from "react";
import fileImage from '../assets/file2.png';
import '../styles/Whyus.css';
import { useState, useEffect } from 'react';

const Whyus = () => {
    const [translateY, setTranslateY] = useState(50);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const translateValue = scrollPosition * 0.5; // Reversed multiplier
    setTranslateY(translateValue);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return(
        <div className='whyus'>
              <h1>WhyUs?</h1>
              <img src={fileImage} width={100} style={{ transform: `translateY(${translateY}px)`,display: 'hidden' }} className='flowerimg' alt="" />
        </div>
    )
}
export default Whyus;