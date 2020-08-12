import { GET_NEWS } from "./newsTypes";

const initialState = {
  numOfNews: 5,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        numOfNews: state.numOfNews + 1,
      };
    default:
      return state;
  }
};

export default newsReducer;
