import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { movieDetailsReducer, moviesReducer } from "./movie/reducers";

const initialState = {};

const reducer = combineReducers({
    movies: moviesReducer,
    currMovie: movieDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
