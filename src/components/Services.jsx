import React from "react";
import "../styles/Services.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      threshold: 0.5,
    });
  }, []);
  return (
    <div className="service-container container" id="services">
      <div className="service-text">
        <h2 className="text-shadow" data-aos="fade-left">Our Service</h2>
        <h1 className="text-shadow" data-aos="fade-left">It's not about what we make, it's about how satisfied you are with our service</h1>
      </div>
      <div className="service-items">
        <h4>•Design Graphic</h4>
        <h4>Webflow</h4>
        <h4>UIUX Design</h4>
        <h4>Illustration</h4>
        <h4>Motion</h4>
        <h4>3D Design</h4>
        <h4>Brand Identity</h4>
      </div>
    </div>
  );
};
export default Services;
