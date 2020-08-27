import React, { useState, useEffect } from "react";
import { fetchRankings } from "../redux";
import { connect, useSelector, useDispatch } from "react-redux";
import Loading from "../components/Loading";

const Ranking = () => {
  const [hltvRanking, setHltvRanking] = useState([]);
  const rankings = useSelector((state) => state.rankings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRankings());
  }, []);

  useEffect(() => {
    setHltvRanking(rankings.rankings);
  }, [rankings]);

  const isRankingAvailable = rankings.rankings.length > 0;

  const teamRankStatusColor = (status) => {
    if (status < 0) {
      return "team--drop";
    } else if (status > 0) {
      return "team--grow";
    } else if (status === 0) {
      return "team--stable";
    } else {
      return "team--no-info";
    }
  };

  const renderRankings = rankings.rankings.map((team, index) => (
    <li className="list-item ranking__list-item" key={index}>
      <h4 className="heading heading-4 ranking__heading">
        {index + 1} {team.team.name}{" "}
        <span
          className={`span ranking__status  ${teamRankStatusColor(
            team.change
          )}`}
        >
          {team.change > 0 && "+"}
          {team.change === 0 ? "-" : team.change}
        </span>
      </h4>
    </li>
  ));

  if (isRankingAvailable) {
    return (
      <section className="section section-ranking">
        <h3 className="heading heading--title heading-3">
          Top 30 teams in the World
        </h3>

        <ul className="list ranking__list">{renderRankings}</ul>
      </section>
    );
  } else {
    return <Loading />;
  }
};

export default connect()(Ranking);
