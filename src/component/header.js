import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <header className="header">
      <div className="header-wrapper">
        <Link to="/" className="logo-container">
          <img src={Logo} alt="logo" className="logo" />
        </Link>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span className="hamburger"><GiHamburgerMenu /></span>
        </button>

        <div className={`navigation ${isMenuOpen ? 'active' : ''}`}>
          <nav className="nav-links">
            <Link to="/" onClick={toggleMenu}>HOME</Link>
            <Link to="/clothing" onClick={toggleMenu}>CLOTHING</Link>
            <Link to="/instamart" onClick={toggleMenu}>GROCERY</Link>
            <Link to="/fitness" onClick={toggleMenu}>FITNESS</Link>
            <Link to="/dineout" onClick={toggleMenu}>DINEOUT</Link>
            <Link to="/restaurant" onClick={toggleMenu}>RESTAURANT</Link>
            <Link to="/mobiles" onClick={toggleMenu}>MOBILES</Link>
            <Link to="/electronics" onClick={toggleMenu}>ELECTRONICS</Link>
            <Link to="/beauty" onClick={toggleMenu}>BEAUTY</Link>
            <Link to="/books" onClick={toggleMenu}>BOOKS</Link>
            <Link to="/toys" onClick={toggleMenu}>TOYS</Link>
            <Link to="/mybooking" onClick={toggleMenu}>BOOKINGS</Link>
            {/* <Link to="/stationary" onClick={toggleMenu}>STATIONARY</Link>
            <Link to="/homekitchen" onClick={toggleMenu}>HOME & KITCHEN</Link> */}
          </nav>

          <div className="nav-actions">
            <Link to="/favorite" className="icon-link" onClick={toggleMenu}>
              <lord-icon
                src="https://cdn.lordicon.com/aydxrkfl.json"
                trigger="hover"
                colors="primary:#000000,secondary:#848484"
                style={{ width: "24px", height: "24px" }}
              ></lord-icon>
            </Link>

            <Link to="/cart" className="icon-link cart-icon" onClick={toggleMenu}>
              <lord-icon
                src="https://cdn.lordicon.com/ggirntso.json"
                trigger="hover"
                colors="primary:#000000,secondary:#848484"
                style={{ width: "24px", height: "24px" }}
              ></lord-icon>
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </Link>

            <Link to="/login" className="icon-link" onClick={toggleMenu}>
              <lord-icon
                src="https://cdn.lordicon.com/kdduutaw.json"
                trigger="hover"
                colors="primary:#000000,secondary:#848484"
                style={{ width: "24px", height: "24px" }}
              ></lord-icon>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;