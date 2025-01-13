import { applyMiddleware, compose, createStore } from "redux";
import { mainReducers } from "./services/reducers";
import { thunk } from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(mainReducers, composeEnhancers(applyMiddleware(thunk)));