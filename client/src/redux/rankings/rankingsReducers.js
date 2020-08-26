import {
  FETCH_RANKINGS_REQUEST,
  FETCH_RANKINGS_SUCCESS,
  FETCH_RANKINGS_FAILURE,
} from "./rankingsTypes";

const initialState = {
  loading: false,
  rankings: [],
  error: "",
};

const rankingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANKINGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_RANKINGS_SUCCESS:
      return {
        loading: false,
        rankings: action.payload,
        error: "",
      };
    case FETCH_RANKINGS_FAILURE:
      return {
        loading: false,
        rankings: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rankingsReducer;
