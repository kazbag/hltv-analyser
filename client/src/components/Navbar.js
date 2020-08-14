import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink className="nav__link" exact to="/">
        <span></span>
        <p>Homepage</p>
      </NavLink>
      <NavLink className="nav__link" to="/during">
        <span></span>
        <p>During</p>
      </NavLink>
      <NavLink className="nav__link" to="/incoming">
        <span></span>
        <p>Incoming</p>
      </NavLink>
      <NavLink className="nav__link" to="/history">
        <span></span>
        <p>History</p>
      </NavLink>
      <NavLink className="nav__link" to="/profile">
        <span></span>
        <p>Your profile</p>
      </NavLink>
    </nav>
  );
};

// const activeClassName = "active";

// const StyledNavbarContainer = styled.nav``;

// const StyledNav = styled.div`
//   background: ${variables.primaryColor};
//   display: flex;
//   column-gap: 2rem;
//   padding: ${variables.buttonPadding};
// `;

// const StyledNavLink = styled(NavLink).attrs({
//   activeClassName: activeClassName,
// })`
//   &.${activeClassName} {
//     position: relative;
//     &:after {
//       position: absolute;
//       content: "";
//       width: 100%;
//       bottom: 0;
//       left: 0;
//       height: 1px;
//       background: ${variables.secondaryColor};
//     }
//   }
//   position: relative;
//   font-size: ${variables.paragraphTextSize};
//   padding: ${variables.paddingSmall};
//   text-decoration: none;
//   color: ${variables.whiteColor};
//   transition: 0.25s ease-in-out;
//   p {
//     position: relative;
//     z-index: 10;
//   }
//   span {
//     position: absolute;
//     top: 0;
//     left: 0;
//     height: 100%;
//     width: 0;
//     background: ${variables.darkColor};
//     opacity: 0.15;
//     z-index: 0;
//     transition: 0.35s ease-in-out;
//   }
//   &:hover span {
//     width: 100%;
//   }
//   &:hover {
//     /* color: ${variables.secondaryColor}; */

//   }
// `;
export default Navbar;
