import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'; // Import social media icons
 // Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>©2025 ORAN Transport | All Rights Reserved</p>
        
        <div className="footer-description">
          <p>TBM Transport is dedicated to providing reliable and efficient transportation services in the city. We offer easy access to bus and tram schedules, tickets, and real-time traffic information to make your journey smoother and more convenient.</p>
        </div>

        <div className="footer-links">
          <a href="#">Disclaimer</a>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
