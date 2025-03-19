import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "unset" : "hidden";
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={Logo} alt="Nick World" />
        </Link>
       

        {/* Desktop Navigation */}
        <nav className="nav-links">
        <Link to="/" className="nav-item">HOME</Link>
          {["restaurant", "clothing", "instamart", "fitness", "dineout", "mobiles", "electronics", "beauty"].map((route) => (
            <Link key={route} to={`/${route}`} className="nav-item">
              {route.toUpperCase()}
            </Link>
          ))}
          <Link to="/mybooking" className="nav-item">MY BOOKINGS</Link>
        </nav>

        {/* Icons */}
        <div className="nav-icons">
          <Link to="/favorite" className="icon-btn">
            <FaHeart />
          </Link>
          <Link to="/cart" className="icon-btn cart-icon">
            <FaShoppingCart />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </Link>
          <Link to="/login" className="icon-btn">
            <FaUser />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
      <Link to="/" onClick={toggleMenu} className="mobile-nav-item">
          HOME
        </Link>
        {["restaurant", "clothing", "instamart", "fitness", "dineout", "mobiles", "electronics", "beauty"].map((route) => (
          <Link key={route} to={`/${route}`} onClick={toggleMenu} className="mobile-nav-item">
            {route.toUpperCase()}
          </Link>
        ))}
        <Link to="/mybooking" onClick={toggleMenu} className="mobile-nav-item">
          MY BOOKINGS
        </Link>
      </div>
    </header>
  );
};

export default Header;
