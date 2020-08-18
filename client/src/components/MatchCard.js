import React from "react";

const MatchCard = (props) => {
  const { event, date, format, live, stars, team1, team2 } = props.props;
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
    </li>
  );
};

export default MatchCard;
