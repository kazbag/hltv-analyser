import React from "react";
import MatchesContainer from "../components/MatchesContainer";

const LiveMatches = () => {
  return (
    <section className="section section__live-matches">
      <MatchesContainer liveMatches />
    </section>
  );
};

export default LiveMatches;
