import React, { useState, useEffect } from "react";
import { fetchUserMatches } from "../redux";
import { connect, useSelector, useDispatch } from "react-redux";

const UserMatches = () => {
  const [userMatchesData, setUserMatchesData] = useState([]);
  const userMatches = useSelector((state) => state.userMatches);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserMatches());
  }, []);

  useEffect(() => {
    setUserMatchesData(userMatches.userMatches);
    console.log(userMatches.userMatches);
  }, [userMatches]);

  return (
    <>
      <div style={{ color: "red" }}>user matches</div>
    </>
  );
};

export default connect()(UserMatches);
