import React from "react";
import '../styles/ContactSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import ReCAPTCHA from 'react-google-recaptcha';

const ContactSection = () => {
    const handleCaptcha = (token) => {
        console.log("CAPTCHA Token:", token);
      };
  return (
    <div className="px-2">
    <section className="contact-section m-4 mx-auto" id="contact">
      <h2 className="text-shadow">Contact Us</h2>
      <p>Have a project in mind? Let's bring it to life together.</p>
      
      <div className="contact-content">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <ReCAPTCHA
        sitekey="YOUR_SITE_KEY"
        onChange={handleCaptcha}
      />
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <div className="info-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>123 Main St, Hometown, USA</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faPhone} />
            <span>(123) 456-7890</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>contact@example.com</span>
          </div>
        </div>
        
      </div>
    </section>
    </div>
  );
};

export default ContactSection;
