import axios from "axios";
import { apiUri } from "../../cfg";
import {
  GET_USER_MATCHES,
  FETCH_USER_MATCHES_REQUEST,
  FETCH_USER_MATCHES_SUCCESS,
  FETCH_USER_MATCHES_FAILURE,
} from "./userMatchesTypes";

export const getUserMatches = (numOfUserMatchesToGet = 5) => {
  return {
    type: GET_USER_MATCHES,
    payload: numOfUserMatchesToGet,
  };
};

export const fetchUserMatchesRequest = () => {
  return {
    type: FETCH_USER_MATCHES_REQUEST,
  };
};

export const fetchUserMatchesSuccess = (userMatches) => {
  return {
    type: FETCH_USER_MATCHES_SUCCESS,
    payload: userMatches,
  };
};

export const fetchUserMatchesFailure = (error) => {
  return {
    type: FETCH_USER_MATCHES_FAILURE,
    payload: error,
  };
};

export const fetchUserMatches = () => {
  return (dispatch) => {
    dispatch(fetchUserMatchesRequest());
    axios
      .get(`${apiUri}/matches/user-matches`)
      .then((res) => {
        const userMatches = res.data;
        return dispatch(fetchUserMatchesSuccess(userMatches));
      })
      .catch((err) => {
        const errorMsg = err.message;
        return dispatch(fetchUserMatchesFailure(errorMsg));
      });
  };
};
