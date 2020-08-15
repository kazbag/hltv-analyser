import React from "react";

const MatchCard = (props) => {
  const { event, date, format, live, stars, team1, team2 } = props.props;
  return (
    <li className="match__item">
      <h6 className="heading heading--darken heading--title--small heading-6 match__heading">
        {event ? event.name : "TBA"}
      </h6>
      <p className="paragraph--small item__date">
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
      <div className="match__links">
        <a
          className="match__link match__link--team match__link--stream"
          href={`https://hltv.org/team/`}
        >
          Team 1
        </a>
      </div>
    </li>
  );
};

export default MatchCard;
