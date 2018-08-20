import { combineReducers } from 'redux';
import defaultState from './defaultState.jsx';

import login from './loginReducer.jsx';

export default combineReducers({
    login
});