import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="header">
        <img
          className="logo"
          alt="logo"
          src="https://alphasilver.productsalphawizz.com/uploads/media/2024/newlogo22.png"
        />

        <nav className="nav-item">
          <ul>
            <li>
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/restaurant">
                RESTAURANT
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                ABOUT-US
              </Link>
            </li>

            <li>
              <Link className="nav-link" to="/instamart">
                GROCERY
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/fitness">
                FITNESS
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/dineout">
                DINEOUT
              </Link>
            </li>
           
            <li>
              <Link className="nav-link" to="/trending">
                TRENDING
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/mybooking">
                BOOKINGS
              </Link>
            </li>
            <li>
              <Link className="nav-link " to="/cart">
                <div class="cart-logo">
                  <span class="cart-icon">
                    <FaShoppingCart />
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        {/* ...user (spread operator) with the help of this it created copy of user
       object in the state and then changing that object in the state and then
        it is reflected in the component */}
        {/* <input onChange={(e)=>{setUser({...user,name : e.target.value})}}></input>
      <input onChange={(e)=>{setUser({...user,email : e.target.value})}}></input> */}
        <Link className="button-login" to="/login">
          <button className="login-button">Login</button>
        </Link>
      </div>
    </>
  );
};

export default Header;
