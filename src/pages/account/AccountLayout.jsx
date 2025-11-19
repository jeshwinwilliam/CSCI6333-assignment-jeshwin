import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AccountLayout = () => {
  const getClass = ({ isActive }) =>
    "sub-link" + (isActive ? " sub-link-active" : "");

  return (
    <section className="page">
      <div className="page-heading">
        <h1>Account</h1>
        <p>Nested routes rendered in a shared layout.</p>
      </div>
      <div className="card">
        <nav className="subnav">
          <NavLink to="profile" className={getClass}>
            Profile
          </NavLink>
          <NavLink to="settings" className={getClass}>
            Settings
          </NavLink>
        </nav>
        <div className="subnav-body">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AccountLayout;
