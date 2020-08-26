import { combineReducers } from "redux";
import matchesReducers from "./matches/matchesReducers";
import newsReducers from "./news/newsReducers";
import userMatchesReducers from "./user-matches/userMatchesReducers";

const rootReducer = combineReducers({
  matches: matchesReducers,
  news: newsReducers,
  userMatches: userMatchesReducers,
});

export default rootReducer;
