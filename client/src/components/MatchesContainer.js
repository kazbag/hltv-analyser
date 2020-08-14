import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchMatches } from "../redux";
import "./styles/matches.scss";

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

  useEffect(() => {
    console.log(matches.matches);
  }, [matches]);

  return (
    <ul className="matches__container">
      {matchesData.length < 1
        ? "loading"
        : matchesData.map((match, index) => (
            <li className="match__item" key={index}>
              <p>
                Match {match.id} {match.live ? "is live" : "is not live"}
              </p>
              <p>{match.format && match.format}</p>
              <p>
                {match.team1 ? match.team1.name + " vs " : "TBA vs "}
                {match.team2 ? match.team2.name : "TBA"}
              </p>
            </li>
          ))}
    </ul>
  );
};

export default connect()(MatchesContainer);
