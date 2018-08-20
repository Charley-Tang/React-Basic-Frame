import { createReducer } from 'redux-act';
import defaultState from './defaultState.jsx';

import { loginFetching, loginSuccess, loginError } from '../action/loginAction.jsx';

const login = createReducer((handlers, onOff) => {
    handlers(loginFetching,
        (state, action) => Object.assign({}, state, action));
    handlers(loginSuccess,
        (state, action) => Object.assign({}, state, action));
    handlers(loginError,
        (state, action) => Object.assign({}, state, action));
}, defaultState);

export default login;