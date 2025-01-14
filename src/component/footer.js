import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <footer className="footer">
      {/* Footer CTA Section */}
      <div className="footer-cta">
        <div className="row">
          {/* Address */}
          <div className="address">
            <div className="cta">
              <i className="icon"></i>
              <div className="text">
                <h4>Find us</h4>
                <span>Vijay Nagar, Indore</span>
              </div>
            </div>
          </div>
          {/* Phone */}
          <div className="phone">
            <a href="tel:9876543210">
              <div className="cta">
                <i className="icon"></i>
                <div className="text">
                  <h4>Call us</h4>
                  <span>9876543210</span>
                </div>
              </div>
            </a>
          </div>
          {/* Email */}
          <div className="email">
            <a href="mailto:support@alphaplatinum.in">
              <div className="cta">
                <i className="icon"></i>
                <div className="text">
                  <h4>Mail us</h4>
                  <span>support@alphaplatinum.in</span>
                </div>
              </div>
            </a>
          </div>
          {/* Seller Login */}
          <div className="seller-login">
            <a href="https://alphasilver.productsalphawizz.com/seller/login">
              <div className="cta">
                <i className="icon"></i>
                <div className="text">
                  <h4>Seller Login</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Main Content */}
      <div className="footer-content">
        <div className="row">
          {/* Logo */}
          <div className="logo">
            <div className="footer-logo">
              <a href="https://alphasilver.productsalphawizz.com/">
                <img
                  src="https://alphasilver.productsalphawizz.com/uploads/newlogo22.png"
                  alt="Alpha Platinum Logo"
                />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="links">
            <h3>Get to Know Us</h3>
            <ul>
              <li><a href="http://localhost:1234/">Home</a></li>
              <li><a href="http://localhost:1234/products">Products</a></li>
              <li><a href="http://localhost:1234/login">Login</a></li>
              <li><a href="http://localhost:1234/register">Register</a></li>
              <li><a href="http://localhost:1234/about">About Us</a></li>
              <li><a href="http://localhost:1234/contact">Contact Us</a></li>
              <li><a href="http://localhost:1234/sellers">Sellers</a></li>
            </ul>
          </div>
          {/* Social Media */}
          <div className="social-media">
            <span>Connect with Us</span>
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
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="row">
          <div className="text-left">
            <p>&copy; 2024 Alpha Platinum Private Limited. All Rights Reserved.</p>
          </div>
          <div className="col text-right">
            <ul className="footer-menu">
              <li><a href="http://localhost:1234/">Home</a></li>
              <li><a href="http://localhost:1234/termcondition">Terms & Conditions</a></li>
              <li><a href="https://alphasilver.productsalphawizz.com/home/privacy-policy">Privacy Policy</a></li>
              <li><a href="http://localhost:1234/about">About Us</a></li>
              <li><a href="http://localhost:1234/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
