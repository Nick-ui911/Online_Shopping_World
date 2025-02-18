import Logo from "../assets/images/logo.png";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="header-container">
        {/* Logo */}
        <img
          className="logo navbar-brand"
          alt="logo"
          src={Logo}
        />

        {/* Hamburger Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <nav className="nav-item">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/restaurant">
                  RESTAURANT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/clothing">
                  CLOTHING
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/instamart">
                  GROCERY
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fitness">
                  FITNESS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dineout">
                  DINEOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trending">
                  TRENDING
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mybooking">
                  BOOKINGS
                </Link>
              </li>
              
              {/* Icons */}
              <li className="nav-item">
                <Link className="nav-link fav" to="/favorite">
                  <lord-icon
                    src="https://cdn.lordicon.com/aydxrkfl.json"
                    trigger="loop"
                    colors="primary:#000000,secondary:#848484"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link cart-link" to="/cart">
                  <div className="cart-logo">
                    <span className="cart-icon">
                      <lord-icon
                        src="https://cdn.lordicon.com/ggirntso.json"
                        trigger="loop"
                        colors="primary:#000000,secondary:#848484"
                        style={{ width: "40px", height: "40px" }}
                      ></lord-icon>
                    </span>
                    {cartItems.length > 0 && (
                      <span className="cart-badge badge rounded-pill bg-danger">
                        {cartItems.length}
                      </span>
                    )}
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
          <Link className="button-login" to="/login">
            <lord-icon
              src="https://cdn.lordicon.com/kdduutaw.json"
              trigger="loop"
              colors="primary:#000000,secondary:#848484"
              style={{ width: "40px", height: "40px" }}
            ></lord-icon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;