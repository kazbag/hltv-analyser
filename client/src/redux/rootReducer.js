import { combineReducers } from "redux";
import matchesReducers from "./matches/matchesReducers";
import newsReducers from "./news/newsReducers";

const rootReducer = combineReducers({
  matches: matchesReducers,
  news: newsReducers,
});

export default rootReducer;
