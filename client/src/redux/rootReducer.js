import { combineReducers } from "redux";
import matchesReducers from "./matches/matchesReducers";
import newsReducers from "./news/newsReducers";
import userMatchesReducers from "./user-matches/userMatchesReducers";
import rankingsReducers from "./rankings/rankingsReducers.js";

const rootReducer = combineReducers({
  matches: matchesReducers,
  news: newsReducers,
  userMatches: userMatchesReducers,
  rankings: rankingsReducers,
});

export default rootReducer;
