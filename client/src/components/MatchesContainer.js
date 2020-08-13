import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { getMatches } from "../redux";

const MatchesContainer = (props) => {
  const [numOfMatchesToGet, setNumOfMatchesToGet] = useState(10);

  const numOfMatches = useSelector((state) => state.matches.numOfMatches);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        value={numOfMatchesToGet}
        onChange={(e) => setNumOfMatchesToGet(e.target.value)}
      />
      <h3>Live matches - {numOfMatches}</h3>
      <button onClick={() => dispatch(getMatches(numOfMatchesToGet))}>
        Add new match
      </button>
    </div>
  );
};

export default connect()(MatchesContainer);
