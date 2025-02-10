import React from "react";
import { FaInstagramSquare, FaFacebookSquare, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaStore } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Contact Section */}
        <div className="quick-contact">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon location-icon" />
            <div className="contact-text">
              <h4>Find us</h4>
              <span>Vijay Nagar, Indore</span>
            </div>
          </div>

          <div className="contact-item">
            <FaPhoneAlt className="contact-icon phone-icon" />
            <div className="contact-text">
              <h4>Call us</h4>
              <a href="tel:9876543210">9876543210</a>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon email-icon" />
            <div className="contact-text">
              <h4>Mail us</h4>
              <a href="https://mail.google.com/mail/baghelnikhil911@gmail.com">Nikhil Singh</a>
            </div>
          </div>

          <div className="contact-item">
            <FaStore className="contact-icon seller-icon" />
            <div className="contact-text">
              <h4>Seller Login</h4>
              <a href="https://alphasilver.productsalphawizz.com/seller/login">Access Seller Portal</a>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-content">
          <div className="footer-logo">
            <img 
              src="https://alphasilver.productsalphawizz.com/uploads/newlogo22.png" 
              alt="Alpha Platinum Logo" 
            />
            <p>Alpha Platinum: Your trusted platform for quality products and exceptional service.</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <div className="links-grid">
              <a href="http://localhost:1234/">Home</a>
              <a href="http://localhost:1234/products">Products</a>
              <a href="http://localhost:1234/login">Login</a>
              <a href="http://localhost:1234/register">Register</a>
              <a href="http://localhost:1234/about">About Us</a>
              <a href="http://localhost:1234/contact">Contact</a>
            </div>
          </div>

          <div className="footer-social">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <BsTwitterX />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare />
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                <IoLogoYoutube />
              </a>
            </div>
            <div className="app-download">
              <img
                src="https://alphasilver.productsalphawizz.com/uploads/app-store.png"
                alt="App Store"
              />
              <img
                src="https://alphasilver.productsalphawizz.com/uploads/google-play.png"
                alt="Google Play"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 Alpha Platinum Private Limited. All Rights Reserved.</p>
          <div className="footer-menu">
            <a href="http://localhost:1234/termcondition">Terms & Conditions</a>
            <a href="https://alphasilver.productsalphawizz.com/home/privacy-policy">Privacy Policy</a>
            <a href="http://localhost:1234/about">About Us</a>
            <a href="http://localhost:1234/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;