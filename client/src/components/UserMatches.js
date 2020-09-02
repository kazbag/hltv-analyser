import React, { useState, useEffect } from "react";
import { fetchUserMatches } from "../redux";
import { connect, useSelector, useDispatch } from "react-redux";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
const UserMatches = () => {
  const [userMatchesData, setUserMatchesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const userMatches = useSelector((state) => state.userMatches);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserMatches());
  }, []);

  useEffect(() => {
    setUserMatchesData(userMatches.userMatches);
    setLoading(false);
  }, [userMatches]);

  const isAtLeastOneMatchAvailable = userMatches.userMatches.length > 0;

  const getMatchUri = (hltvUri, matchId, team1Name, team2Name, eventName) => {
    const matchUri = `${hltvUri}/matches/${matchId}/${team1Name}-vs-${team2Name}-${eventName}`
      .replace(/\s+/g, "-")
      .toLowerCase();
    return matchUri;
  };

  const renderUserMatches = userMatches.userMatches.map((match, index) => (
    // TODO: change match model, app is dead if match is TBA
    <li className="list-item user-matches__list-item" key={index}>
      <h4 className="heading heading-4 user-matches__heading">
        {index + 1}. {match.team1.name} vs {match.team2.name}
      </h4>
      <a
        className="link user-matches__link"
        target="_blank"
        rel="noopener noreferrer"
        href={getMatchUri(
          "https://hltv.org",
          match.id,
          match.team1.name,
          match.team2.name,
          match.event.name
        )}
      >
        Match
      </a>
    </li>
  ));

  if (isAtLeastOneMatchAvailable) {
    return <ul className="list user-matches__list">{renderUserMatches}</ul>;
  } else if (loading) {
    return <Loading />;
  } else {
    return (
      <ErrorMessage
        type="warning"
        message="You have to add at least one match to your favourites"
      />
    );
  }
};

export default connect()(UserMatches);
