import React from "react";
import { connect } from "react-redux";
import { getMatches } from "../redux";

const MatchesContainer = (props) => {
  return (
    <div>
      <h3>Live matches - {props.numOfMatches}</h3>
      <button onClick={props.getMatches}>Add new match</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfMatches: state.numOfMatches,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMatches: () => dispatch(getMatches()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchesContainer);
