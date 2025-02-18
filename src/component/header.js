import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <img className="logo navbar-brand" alt="logo" src={Logo}    style={{
    width: '70px', // Adjust the size to fit your navbar
    height: '70px', // Maintain aspect ratio
    objectFit: 'contain', // Ensure logo doesn't get stretched
    margin: '0 15px', // Adjust the margin if needed for spacing
  }} />

      {/* Hamburger button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navigation Links */}
      <div className="collapse navbar-collapse" id="navbarNav">
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
            <li className="nav-item">
              <Link className="nav-link fav" to="/favorite">
                <lord-icon
                  src="https://cdn.lordicon.com/aydxrkfl.json"
                  trigger="loop"
                  colors="primary:#000000,secondary:#848484"
                  style={{ width: "40px", height: "40px" }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                ></lord-icon>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <div className="cart-logo position-relative">
                  <span className="cart-icon">
                    <lord-icon
                      src="https://cdn.lordicon.com/ggirntso.json"
                      trigger="loop"
                      colors="primary:#000000,secondary:#848484"
                      style={{ width: "40px", height: "40px" }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    ></lord-icon>
                  </span>
                  {cartItems.length > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
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
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          ></lord-icon>
        </Link>
      </div>
    </div>
  );
};

export default Header;
