import { createStore, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import combineReducers from './reducer/_rootReducer.jsx';
import logger from 'redux-logger';

export default createStore(
    combineReducers,
    applyMiddleware(ThunkMiddleware, logger)
);

