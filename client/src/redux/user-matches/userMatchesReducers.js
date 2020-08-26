import {
  FETCH_USER_MATCHES_REQUEST,
  FETCH_USER_MATCHES_SUCCESS,
  FETCH_USER_MATCHES_FAILURE,
} from "./userMatchesTypes";

const initialState = {
  loading: false,
  userMatches: [],
  error: "",
};

const userMatchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_MATCHES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_MATCHES_SUCCESS:
      return {
        loading: false,
        userMatches: action.payload,
        error: "",
      };
    case FETCH_USER_MATCHES_FAILURE:
      return {
        loading: false,
        userMatches: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userMatchesReducer;
