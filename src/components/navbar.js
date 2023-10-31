import logo from "../assets/logo.svg";
import { links } from "./Constants";
import { FaShoppingCart } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import "../App.css";

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
                  <a href={link.to}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="cart-wrapper">
          <a href="#">
            <span className="cart-container">Cart</span>
            <FaShoppingCart />
          </a>
          <a href="#">
            <span className="login-container">Login</span>
            <HiUserAdd />
          </a>
        </div>
      </div>
    </header>
  );
};
export default navbar;
