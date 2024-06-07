import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="new-footer">
      <div className="new-footer-container">
        <p>Contact us at <a href="mailto:info@example.com">info@example.com</a> or call <a href="tel:+15551234567">+1 (555) 123-4567</a></p>
        <div className="social-icons">
          <a href="https://twitter.com"><FaTwitter /></a>
          <a href="https://facebook.com"><FaFacebook /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2024 Example Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
