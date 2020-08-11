import React, { useState, useEffect } from "react";
import styled from "styled-components";
import variables from "../utils/variables";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <StyledNavbarContainer>
      <StyledNav>
        <StyledNavLink exact to="/">
          <span></span>
          <p>Homepage</p>
        </StyledNavLink>
        <StyledNavLink to="/during">
          <span></span>
          <p>During</p>
        </StyledNavLink>
        <StyledNavLink to="/incoming">
          <span></span>
          <p>Incoming</p>
        </StyledNavLink>
        <StyledNavLink to="/history">
          <span></span>
          <p>History</p>
        </StyledNavLink>
        <StyledNavLink to="/profile">
          <span></span>
          <p>Your profile</p>
        </StyledNavLink>
      </StyledNav>
    </StyledNavbarContainer>
  );
};

const activeClassName = "active";

const StyledNavbarContainer = styled.nav``;

const StyledNav = styled.div`
  background: ${variables.primaryColor};
  display: flex;
  column-gap: 2rem;
  padding: ${variables.buttonPadding};
`;

const StyledNavLink = styled(NavLink).attrs({
  activeClassName: activeClassName,
})`
  &.${activeClassName} {
    position: relative;
    &:after {
      position: absolute;
      content: "";
      width: 100%;
      bottom: 0;
      left: 0;
      height: 1px;
      background: ${variables.secondaryColor};
    }
  }
  position: relative;
  font-size: ${variables.paragraphTextSize};
  padding: ${variables.paddingSmall};
  text-decoration: none;
  color: ${variables.whiteColor};
  transition: 0.25s ease-in-out;
  p {
    position: relative;
    z-index: 10;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background: ${variables.darkColor};
    opacity: 0.15;
    z-index: 0;
    transition: 0.35s ease-in-out;
  }
  &:hover span {
    width: 100%;
  }
  &:hover {
    /* color: ${variables.secondaryColor}; */

  }
`;
export default Navbar;
