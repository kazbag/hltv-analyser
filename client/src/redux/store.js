import { createStore } from "redux";
import matchesReducers from "./matches/matchesReducers";

const store = createStore(matchesReducers);

export default store;
