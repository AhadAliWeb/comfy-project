import logo from "../assets/logo.svg";
import { links } from "./Constants";
import { FaShoppingCart } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import "../App.css";
import { Link } from "react-router-dom";

const navbar = () => {
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
          </ul>
        </nav>
        <div className="cart-wrapper">
          <Link to="/cart">
            <span className="cart-container">Cart</span>
            <FaShoppingCart />
          </Link>
          <Link to="/" href="#">
            <span className="login-container">Login</span>
            <HiUserAdd />
          </Link>
        </div>
      </div>
    </header>
  );
};
export default navbar;
