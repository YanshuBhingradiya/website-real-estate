import React, { useState } from "react";
import "./Header.css";
import { 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

import { Link } from "react-router-dom";
import logo from "../../images/logo_removed_bg.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        
        {/* Brand Section */}
        <div className="footer-col footer-brand">
          <div className="logo-container">
            <img src={logo} alt="DreamHome Logo" className="logo-icon1" />
            <div className="logo-text-container">
              <h2 className="logo-text">DreamDWello</h2>
              <p className="logo-tagline">Your Dream Home Awaits</p>
            </div>
          </div>
          <p className="footer-description">
            Bringing you closer to your dream home, one click at a time. 
            Quality homes, trusted services, and lifelong partnerships.
          </p>
          
          <div className="contact-info">
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>info@dreamhome.com</span>
            </div>
            {/* <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Main St, New York, NY</span>
            </div> */}
          </div>
        </div>

        {/* Quick Links */}
        {/* <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/properties">Propertices</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div> */}

        {/* Support */}
        <div className="footer-col">
          <h3 className="footer-title">Quich Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
             <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="stayupdated">
          <h3 className="footer-title">Stay Updated</h3>
          <p className="newsletter-text">
            Subscribe to our newsletter for the latest property updates and offers.
          </p>
          
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
            </div>
            <button type="submit" className="subscribe-btn">Subscribe</button>
            {subscribed && (
              <div className="success-message">
               Successfully subscribed!
              </div>
            )}
          </form>

          {/* Social Media */}
          {/* <div className="social-section">
            <h4 className="social-title">Connect With Us</h4>
            <div className="footer-social">
              <Link to="#" className="social-icon facebook"><FaFacebookF /></Link>
              <Link to="#" className="social-icon instagram"><FaInstagram /></Link>
              <Link to="#" className="social-icon twitter"><FaTwitter /></Link>
              <Link to="#" className="social-icon linkedin"><FaLinkedinIn /></Link>
              <Link to="#" className="social-icon youtube"><FaYoutube /></Link>
            </div>
          </div> */}

          {/* Copyright Section */}
<div className="footer-copyright">
  <p>
    © {new Date().getFullYear()} DreamDWello Real Estate. 
    All rights reserved. 
    <span style={{ marginLeft: '1rem', color: '#00c6ff' }}>
    </span>
  </p>
  {/* <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.8 }}>
    RERA Registered: MH/1234/2023 | GSTIN: 27AAAAA0000A1Z5
  </p> */}
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;