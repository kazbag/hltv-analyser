import axios from "axios";
import { apiUri } from "../../cfg";
import {
  GET_RANKINGS,
  FETCH_RANKINGS_REQUEST,
  FETCH_RANKINGS_SUCCESS,
  FETCH_RANKINGS_FAILURE,
} from "./rankingsTypes";

export const getRankings = (numOfTeamsToGet = 5) => {
  return {
    type: GET_RANKINGS,
    payload: numOfTeamsToGet,
  };
};

export const fetchRankingsRequest = () => {
  return {
    type: FETCH_RANKINGS_REQUEST,
  };
};

export const fetchRankingsSuccess = (ranking) => {
  return {
    type: FETCH_RANKINGS_SUCCESS,
    payload: ranking,
  };
};

export const fetchRankingsFailure = (error) => {
  return {
    type: FETCH_RANKINGS_FAILURE,
    payload: error,
  };
};

export const fetchRankings = () => {
  return (dispatch) => {
    dispatch(fetchRankingsRequest());
    axios
      .get(`${apiUri}/teams/ranking`)
      .then((res) => {
        const rankings = res.data;
        return dispatch(fetchRankingsSuccess(rankings));
      })
      .catch((err) => {
        const errorMsg = err.message;
        return dispatch(fetchRankingsFailure(errorMsg));
      });
  };
};
