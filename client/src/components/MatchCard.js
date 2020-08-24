import React, { useState, useEffect } from "react";
import Button from "./Form/Button";
import axios from "axios";
import { apiUri } from "../cfg";

const showToast = () => {
  alert("added match to favourites");
};

const addMatchToFavourites = (matchData) => {
  axios
    .post(`${apiUri}/matches/user-matches`, { matchData })
    .then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        showToast();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const MatchCard = (props) => {
  const { event, id, date, format, live, stars, team1, team2 } = props.props;
  const [matchData, setMatchData] = useState({});

  useEffect(() => {
    setMatchData(props.props);
  }, [props.props]);

  return (
    <li className="match__item">
      <h6 className="heading heading--darken heading--title--small heading-6 match__heading">
        {event ? event.name : "TBA"}
      </h6>
      <p className="paragraph--small match__date">
        {date && !live ? new Date(date).toLocaleString() : "playing"}
      </p>
      <p
        className={
          "paragraph--small match__status " +
          (live === true
            ? "match__status--is-live"
            : "match__status--is-not-live")
        }
      >
        {live ? "live" : "off"}
      </p>
      <p className="paragraph--small match__format">{format && format}</p>
      <ul className="match__stars"></ul>
      <p className="match__teams">
        {team1 ? team1.name + " vs " : "TBA vs "}
        {team2 ? team2.name : "TBA"}
      </p>
      {team1 && team1.id && team2 && team2.id ? (
        <div className="match__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="match__link match__link--team match__link--team1"
            href={`https://hltv.org/team/${team1.id}/${team1.name}`}
          >
            {team1.name}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="match__link match__link--team match__link--team2"
            href={`https://hltv.org/team/${team2.id}/${team2.name}`}
          >
            {team2.name}
          </a>
        </div>
      ) : null}
      <Button
        text="Save match"
        type="button"
        name="button--favourite"
        style="white"
        onClick={() => addMatchToFavourites(matchData)}
      ></Button>
    </li>
  );
};

export default MatchCard;
