import { createStore, applyMiddleware } from "redux";
import matchesReducers from "./matches/matchesReducers";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
