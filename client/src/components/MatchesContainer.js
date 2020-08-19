import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchMatches } from "../redux";
import MatchCard from "./MatchCard";

const MatchesContainer = ({ allMatches, liveMatches, offlineMatches }) => {
  const [allMatchesData, setAllMatchesData] = useState([]);
  const [liveMatchesData, setLiveMatchesData] = useState([]);
  const [offlineMatchesData, setOfflineMatchesData] = useState([]);
  const matches = useSelector((state) => state.matches);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMatches());
  }, []);

  useEffect(() => {
    setAllMatchesData(matches.matches);
  }, [matches]);

  useEffect(() => {
    const liveMatches = allMatchesData.filter((m) => m.live === true);
    const offlineMatches = allMatchesData.filter((m) => m.live !== true);
    setLiveMatchesData(liveMatches);
    setOfflineMatchesData(offlineMatches);
  }, [allMatchesData]);

  if (allMatches) {
    return (
      <div className="matches__container">
        <h3 className="heading heading--title heading-3">All matches</h3>
        <ul className="matches__container__matches">
          {allMatchesData.length < 1
            ? "loading"
            : allMatchesData.map((match, index) => (
                <MatchCard key={index} props={match} />
              ))}
        </ul>
      </div>
    );
  } else if (liveMatches) {
    return (
      <div className="matches__container">
        <h3 className="heading heading--title heading-3">Live matches</h3>
        <ul className="matches__container__matches">
          {liveMatchesData.length < 1
            ? "loading"
            : liveMatchesData.map((match, index) => (
                <MatchCard key={index} props={match} />
              ))}
        </ul>
      </div>
    );
  } else if (offlineMatches) {
    return (
      <div className="matches__container">
        <h3 className="heading heading--title heading-3">Offline matches</h3>
        <ul className="matches__container__matches">
          {offlineMatchesData.length < 1
            ? "loading"
            : offlineMatchesData.map((match, index) => (
                <MatchCard key={index} props={match} />
              ))}
        </ul>
      </div>
    );
  }
};

export default connect()(MatchesContainer);
