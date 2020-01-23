import React from "react";
import { Link, NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        Turtle Pizza Admin
      </Link>
        <div className="navbar-nav ml-auto">
          <NavLink to="/" className="nav-item nav-link">
            Dishes
          </NavLink>
          <NavLink to="/orders" className="nav-item nav-link">
            Orders
          </NavLink>
        </div>
    </nav>
  );
};

export default TopBar;
