import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <NavLink to="/" className="navbar-links-item">
          <li>Home</li>
        </NavLink>
        <NavLink to="/contact" className="navbar-links-item">
          <li>Contact us</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default NavBar;
