import React from "react";

const MatchCard = ({ props }) => {
  console.log(props);
  return (
    <li className="match__item">
      <h6 className="heading heading--darken heading--title--small heading-6">
        {props.event ? props.event.name : "TBA"}
      </h6>
      <p
        className={
          "match__status " +
          (props.live === true
            ? "match__status--is-live"
            : "match__status--is-not-live")
        }
      >
        {props.live ? "live" : "not live"}
      </p>
      <p className="match__format">{props.format && props.format}</p>
      <p className="match__teams">
        {props.team1 ? props.team1.name + " vs " : "TBA vs "}
        {props.team2 ? props.team2.name : "TBA"}
      </p>
      <div className="match__links">
        <a
          className="match__link match__link--team match__link--team1"
          href="#"
        >
          Team 1
        </a>
        <a
          className="match__link match__link--team match__link--team1"
          href="#"
        >
          Team 2
        </a>
      </div>
    </li>
  );
};

export default MatchCard;
