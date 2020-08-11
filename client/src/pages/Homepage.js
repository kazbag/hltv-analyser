import React, { useState, useEffect } from "react";
import styled from "styled-components";
import variables from "../utils/variables";

const Homepage = () => {
  return (
    <StyledHomepageContainer>
      <h3>hello world</h3>
    </StyledHomepageContainer>
  );
};

const StyledHomepageContainer = styled.div`
  padding: ${variables.paddingPage};
  background: ${variables.darkColor};
  color: ${variables.whiteColor};
`;

export default Homepage;
