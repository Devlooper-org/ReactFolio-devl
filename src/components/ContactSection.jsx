import React, { lazy } from "react";
import '../styles/ContactSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactDOM from "react-dom";
import { useEffect } from "react";
import loading from '../assets/loading.gif';

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
    });
  }, []);
  
  const handleClick = async (event) => {
    event.preventDefault();
    const loading = document.getElementById("loadingImage");
    const messageBoxText = document.getElementById("messageBoxText");
    const URL = "https://api.devlooper.me/sendMail";
    const subject = document.querySelector('input[name="subject"]').value;
    const sender_email = document.querySelector('input[name="sender_email"]').value;
    const body = document.querySelector('textarea[name="body"]').value;
    const access_token = "8f9ff548-cdb4-4c9e-b39e-5ab3b28e1901"
    console.log(subject, sender_email, body);
    if (!subject || !sender_email || !body) {
      console.error("All fields are required.");
      messageBoxText.innerHTML = `All fields are required! <i class="fas fa-times-circle" style="color: red;"></i>`;
      return;
    }
    try {
      messageBoxText.innerHTML = "";
      loading.classList.remove("d-none");
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          subject:subject,
          sender_email:sender_email,
          body:body,
          access_token:access_token }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        messageBoxText.innerHTML = `Failed to send message! <i class="fas fa-times-circle" style="color: red;"></i>`;
        return;
      }
      const result = await response.json();
      messageBoxText.innerHTML = `Sent Successfully! <i class="fas fa-check-circle" style="color: green;"></i>`;
      messageBoxText.classList.remove("d-none");
      loading.classList.add("d-none");
      document.querySelector('input[name="subject"]').value = "";
      document.querySelector('input[name="sender_email"]').value = "";
      document.querySelector('textarea[name="body"]').value = "";
    } catch (error) {
      console.error("Network error or server is down:", error);
      messageBoxText.innerHTML = `Server Issue! <i class="fas fa-times-circle" style="color: red;"></i>`;
    }
  };
  return (
    <>
    <div className="px-2">
    <section className="contact-section m-4 mx-auto" id="contact">
      <h2 className="text-shadow">Contact Us</h2>
      <p>Have a project in mind? Let's bring it to life together.</p>
      
      <div className="contact-content">
        <form className="contact-form">
          <input type="text" name="subject" data-aos="fade-up" placeholder="Your Name" required />
          <input type="email" name="sender_email" data-aos="fade-up" placeholder="Your Email" required />
          <textarea placeholder="Your Message" name="body" data-aos="fade-up" required></textarea>
          <button data-aos="fade-up" className="text-center d-flex align-items-center justify-content-center" style={{height:"50px"}} onClick={handleClick}>
            <span id="messageBoxText">Send Message</span>
            <img id="loadingImage" src={loading} className="loadingImage d-none"  alt="Loading-Image" />
            </button>
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
