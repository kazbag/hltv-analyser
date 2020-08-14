import axios from "axios";
import { apiUri } from "../../cfg";
import {
  GET_MATCHES,
  FETCH_MATCHES_REQUEST,
  FETCH_MATCHES_SUCCESS,
  FETCH_MATCHES_FAILURE,
} from "./matchesTypes";

export const getMatches = (numOfMatchesToGet = 5) => {
  return {
    type: GET_MATCHES,
    payload: numOfMatchesToGet,
  };
};

export const fetchMatchesRequest = () => {
  return {
    type: FETCH_MATCHES_REQUEST,
  };
};

export const fetchMatchesSuccess = (matches) => {
  return {
    type: FETCH_MATCHES_SUCCESS,
    payload: matches,
  };
};
export const fetchMatchesFailure = (error) => {
  return {
    type: FETCH_MATCHES_FAILURE,
    payload: error,
  };
};
export const fetchMatches = () => {
  return (dispatch) => {
    dispatch(fetchMatchesRequest);
    axios
      .get(`${apiUri}/matches`)
      .then((res) => {
        console.log(res.data);
        const matches = res.data;
        dispatch(fetchMatchesSuccess(matches));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchMatchesFailure(errorMsg));
      });
  };
};
