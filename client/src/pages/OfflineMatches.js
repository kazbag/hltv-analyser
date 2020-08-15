import React from "react";
import MatchesContainer from "../components/MatchesContainer";

const OfflineMatches = () => {
  return (
    <section className="section section__offline-matches">
      <MatchesContainer offlineMatches />
    </section>
  );
};

export default OfflineMatches;
