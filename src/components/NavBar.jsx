import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const getClass = ({ isActive }) =>
    "nav-link" + (isActive ? " nav-link-active" : "");

  return (
    <header className="nav-shell">
      <div className="nav-title">Assignment 04 · Router & Forms</div>
      <nav className="nav-links">
        <NavLink to="/" end className={getClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={getClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={getClass}>
          Contact
        </NavLink>
        <NavLink to="/feedback" className={getClass}>
          Feedback
        </NavLink>
        <NavLink to="/account/profile" className={getClass}>
          Account · Profile
        </NavLink>
        <NavLink to="/account/settings" className={getClass}>
          Account · Settings
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
