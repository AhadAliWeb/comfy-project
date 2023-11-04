import logo from "../assets/logo.svg";
import { links } from "./Constants";
import { FaShoppingCart } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { HiUserMinus } from "react-icons/hi2";
import "../App.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, user } = useAuth0();
  return (
    <header>
      <div className="container nav-container">
        <img src={logo} alt="" className="site-logo" />
        <nav>
          <ul>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Link to={link.to}>{link.text}</Link>
                </li>
              );
            })}
            {user && (
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="cart-wrapper">
          <Link to="/cart">
            <span className="cart-container">Cart</span>
            <FaShoppingCart />
          </Link>
          {user ? (
            <Link
              to="/"
              href="#"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              <span className="login-container">Logout</span>
              <HiUserMinus />
            </Link>
          ) : (
            <Link to="/" href="#" onClick={() => loginWithRedirect()}>
              <span className="login-container">Login</span>
              <HiUserAdd />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
export default Navbar;
