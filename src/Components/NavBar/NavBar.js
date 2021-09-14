import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-wrapper">
      <h2>CBD ENVY</h2>
      <ul>
        <li>
          <Link to="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
