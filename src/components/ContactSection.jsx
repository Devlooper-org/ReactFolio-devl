import React, { lazy } from "react";
import '../styles/ContactSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
    });
  }, []);
 
  return (
    <>
    <div className="px-2">
    <section className="contact-section m-4 mx-auto" id="contact">
      <h2 className="text-shadow">Contact Us</h2>
      <p>Have a project in mind? Let's bring it to life together.</p>
      
      <div className="contact-content">
        <form className="contact-form">
          <input type="text" data-aos="fade-up" placeholder="Your Name" required />
          <input type="email" data-aos="fade-up" placeholder="Your Email" required />
          <textarea placeholder="Your Message" data-aos="fade-up" required></textarea>
          <button type="submit" data-aos="fade-up">Send Message</button>
        </form>
        <div className="contact-info">
          <div className="info-item" data-aos="fade-left">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Mumbai, Maharashtra, India</span>
          </div>
          <div className="info-item" data-aos="fade-left">
            <FontAwesomeIcon icon={faPhone} />
            <span>(+91) 9082898864</span>
          </div>
          <div className="info-item" data-aos="fade-left">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>enquiry@devlooper.me</span>
          </div>
        </div>
        
      </div>
    </section>
    </div>
    </>
  );
};

export default ContactSection;
