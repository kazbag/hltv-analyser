import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink className="nav__link" exact to="/">
        <span></span>
        <p>Homepage</p>
      </NavLink>
      <NavLink className="nav__link" to="/login">
        <span></span>
        <p>Log in</p>
      </NavLink>
      <NavLink className="nav__link" to="/matches/live">
        <span></span>
        <p>Live</p>
      </NavLink>
      <NavLink className="nav__link" to="/matches/upcoming">
        <span></span>
        <p>Upcoming</p>
      </NavLink>
      <NavLink className="nav__link" to="/ranking">
        <span></span>
        <p>Ranking</p>
      </NavLink>
      <NavLink className="nav__link" to="/profile">
        <span></span>
        <p>Your profile</p>
      </NavLink>
    </nav>
  );
};

export default Navbar;
