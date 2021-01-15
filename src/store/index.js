import { compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import combineReducers from "./reducers";

// Enables Redux-Store chrome extention in browser
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Redux - Store
const store = createStore(combineReducers, composeEnhancer(applyMiddleware(thunk)));

export default store;
