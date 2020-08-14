import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MatchesContainer from "../components/MatchesContainer";
import NewsContainer from "../components/NewsContainer";

const Homepage = () => {
  return (
    <div className="homepage">
      <MatchesContainer />
      <NewsContainer />
    </div>
  );
};

// const StyledHomepageContainer = styled.div`
//   padding: ${variables.paddingPage};
//   padding-top: 0;
//   background: ${variables.darkColor};
//   color: ${variables.whiteColor};
// `;

export default Homepage;
