import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { getMatches } from "../redux";

const MatchesContainer = (props) => {
  const numOfMatches = useSelector((state) => state.matches.numOfMatches);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Live matches - {numOfMatches}</h3>
      <button onClick={() => dispatch(getMatches())}>Add new match</button>
    </div>
  );
};

export default connect()(MatchesContainer);
