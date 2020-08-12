import { createStore } from "redux";
import matchesReducers from "./matches/matchesReducers";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;
