import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-section">
          <h2>Would you like to work with us? <span className="highlight">Let's!</span> work together</h2>
          <button className="nav-button">Start a Project?</button>
        </div>
        <div className="center-section">
          <p>Babarsari Sleman, No 23 Ruko<br />
            Biru Kab. Sleman, Kota Yogyakarta<br />
            +62 824 - 2637 - 8823<br />
            +62 813 - 3445 - 9349<br />
            <a href="mailto:Walkagency@studio.io">Walkagency@studio.io</a>
          </p>
        </div>
        <div className="right-section">
          <ul>
            <li><a href="#">Dribbble</a></li>
            <li><a href="#">Behance</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2022 Walkagency - All Right Reserved</p>
      </div>
    </footer>
  );
};


export default Footer;