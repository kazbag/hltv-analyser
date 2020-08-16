import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ProfileNavbar = () => {
  return (
    <nav className="nav profile__navbar">
      <NavLink className="nav__link" exact to="/profile">
        <span></span>
        <p>Profile</p>
      </NavLink>
      <NavLink className="nav__link" to="/profile/teams">
        <span></span>
        <p>Teams</p>
      </NavLink>
      <NavLink className="nav__link" to="/profile/matches">
        <span></span>
        <p>Matches</p>
      </NavLink>
    </nav>
  );
};

export default ProfileNavbar;
