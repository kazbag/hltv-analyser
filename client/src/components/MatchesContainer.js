import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchMatches } from "../redux";
import MatchCard from "./MatchCard";

const MatchesContainer = (props) => {
  const [matchesData, setMatchesData] = useState([]);
  const matches = useSelector((state) => state.matches);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMatches());
  }, []);

  useEffect(() => {
    setMatchesData(matches.matches);
  }, [matches]);

  return (
    <div className="matches__container">
      <h3 className="heading heading--title heading-3">Matches</h3>
      <ul className="matches__container__matches">
        {matchesData.length < 1
          ? "loading"
          : matchesData.map((match, index) => (
              <MatchCard key={index} props={match} />
            ))}
      </ul>
    </div>
  );
};

export default connect()(MatchesContainer);
