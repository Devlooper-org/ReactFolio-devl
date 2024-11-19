import React from "react";
import "../styles/Analytics.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Analytics = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      threshold: 0.5,
    });
  }, []);
  return (
    <div className="container" id="work">
      <h1 className="text-white text-shadow">We always thrive to deliver better.</h1>
      <div className="grid-container text-white">
        <div data-aos="fade-up" className="grid-item box special-box">
          <h2>30+</h2>
          <p>Technologies</p>
          <span>
            The technologies that we have mastered to deliver the best.
          </span>
        </div>

        <div data-aos="fade-up" className="grid-item box">
          <h2>25+</h2>
          <p>Our Client</p>
          <span>Total of clients around the world who have collaboarted with us.</span>
        </div>

        <div data-aos="fade-up" className="grid-item box">
          <h2>1,25,000+</h2>
          <p>Lines of Code</p>
          <span>The lines of code we have written to shape the ideas.</span>
        </div>

        <div data-aos="fade-up" className="grid-item box special-box">
          <h2>35+</h2>
          <p>Projects Completed</p>
          <span>Various kinds of big projects that we have completed on time.</span>
        </div>
      </div>
    </div>
  );
};
export default Analytics;
