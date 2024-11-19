import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer text-white py-3">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-lg-4 mb-4">
            <h4>Would you like discuss something? Let's connect.</h4>
            <span className='d-flex w-100 justify-content-center'>
    <a href="https://facebook.com" className="text-decoration-none text-white me-2">
        <FontAwesomeIcon icon={faFacebook} />
    </a>
    <a href="https://instagram.com/devlooper_india" className="text-decoration-none text-white me-2">
        <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href="https://twitter.com" className="text-decoration-none text-white me-2">
        <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a href="https://linkedin.com" className="text-decoration-none text-white me-2">
        <FontAwesomeIcon icon={faLinkedin} />
    </a>
</span>
            <button className="btn footer-btn mt-3">Start a Project?</button>
          </div>

          {/* Center Section */}
          <div className="col-lg-4 mb-4">
            <p>
              Mumbai<br />
              Maharashtra, India<br />
              +91 90828-98864<br />
              <a href="mailto:Walkagency@studio.io" className="text-white">admin@devlooper.me</a>
            </p>
          </div>

          {/* Right Section */}
          <div className="col-lg-4 mb-4">
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#service" className="text-white text-decoration-none">Service</a></li>
              <li><a href="#" className="text-white text-decoration-none">Portfolio</a></li>
              <li><a href="#" className="text-white text-decoration-none">Work</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row">
          <div className="col text-center">
            <p className="mb-0">&copy; 2023 Devlooper - All Right Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
