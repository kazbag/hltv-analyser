import React, { useState, useEffect } from "react";
import styled from "styled-components";
import variables from "../utils/variables";
import MatchesContainer from "../components/MatchesContainer";
import NewsContainer from "../components/NewsContainer";

const Homepage = () => {
  return (
    <StyledHomepageContainer>
      <h3>hello world</h3>
      <MatchesContainer />
      <NewsContainer />
    </StyledHomepageContainer>
  );
};

const StyledHomepageContainer = styled.div`
  padding: ${variables.paddingPage};
  background: ${variables.darkColor};
  color: ${variables.whiteColor};
`;

export default Homepage;
