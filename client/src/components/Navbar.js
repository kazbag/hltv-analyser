import React, { useState, useEffect } from "react";
import styled from "styled-components";
import variables from "../utils/variables";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <StyledNavbarContainer>
      <StyledNav>
        <StyledNavLink exact to="/">
          Homepage
        </StyledNavLink>
        <StyledNavLink to="/during">During</StyledNavLink>
        <StyledNavLink to="/incoming">Incoming</StyledNavLink>
        <StyledNavLink to="/history">History</StyledNavLink>
        <StyledNavLink to="/profile">Your profile</StyledNavLink>
      </StyledNav>
    </StyledNavbarContainer>
  );
};

const activeClassName = "active";

const StyledNavbarContainer = styled.nav``;

const StyledNav = styled.div`
  background: ${variables.primaryColor};
  display: flex;
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
  font-size: ${variables.paragraphTextSize};
  padding: ${variables.paddingSmall};
  text-decoration: none;
  color: ${variables.whiteColor};
  transition: 0.25s ease-in-out;
  &:hover {
    color: ${variables.secondaryColor};
  }
`;
export default Navbar;
