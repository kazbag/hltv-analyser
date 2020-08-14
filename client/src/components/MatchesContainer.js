import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchMatches } from "../redux";

const MatchesContainer = (props) => {
  const [numOfMatchesToGet, setNumOfMatchesToGet] = useState(10);

  const matches = useSelector((state) => state.matches);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMatches());
  }, []);
  return <div></div>;
};

export default connect()(MatchesContainer);
