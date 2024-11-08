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
            <h2>Would you like to work with us? Let's work together</h2>
            <button className="btn footer-btn mt-3">Start a Project?</button>
          </div>

          {/* Center Section */}
          <div className="col-lg-4 mb-4">
            <p>
              Babarsari Sleman, No 23 Ruko<br />
              Biru Kab. Sleman, Kota Yogyakarta<br />
              +62 824 - 2637 - 8823<br />
              +62 813 - 3445 - 9349<br />
              <a href="mailto:Walkagency@studio.io" className="text-white">Walkagency@studio.io</a>
            </p>
          </div>

          {/* Right Section */}
          <div className="col-lg-4 mb-4">
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Service</a></li>
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
            <span className='d-flex w-100 justify-content-center'>
              <FontAwesomeIcon icon={faFacebook} className='me-2' />
              <FontAwesomeIcon icon={faInstagram} className='me-2' />
              <FontAwesomeIcon icon={faTwitter} className='me-2' />
              <FontAwesomeIcon icon={faLinkedin} className='me-2' />  
            </span>
            <p className="mb-0">© 2022 Walkagency - All Right Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
