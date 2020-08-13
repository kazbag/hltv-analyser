import { GET_MATCHES } from "./matchesTypes";

const initialState = {
  numOfMatches: 3,
};

const matchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MATCHES:
      return {
        ...state,
        numOfMatches: state.numOfMatches + 1,
      };
    default:
      return state;
  }
};

export default matchesReducer;