import {
  FETCH_MATCHES_REQUEST,
  FETCH_MATCHES_SUCCESS,
  FETCH_MATCHES_FAILURE,
} from "./matchesTypes";

const initialState = {
  loading: false,
  matches: [],
  error: "",
};

const matchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MATCHES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MATCHES_SUCCESS:
      return {
        loading: false,
        matches: action.payload,
        error: "",
      };
    case FETCH_MATCHES_FAILURE:
      return {
        loading: false,
        matches: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default matchesReducer;
