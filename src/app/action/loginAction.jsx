import { createAction } from 'redux-act';

const loginFetching = createAction('LOGIN_FETCHING',
    () => ({ isFetching: true }));
const loginSuccess = createAction('LOGIN_SUCCESS',
    data => data);
const loginError = createAction('LOGIN_ERROR',
    msg => msg);

const fetchLogin = (...parameters) => {
    return dispatch => {
        dispatch(loginFetching());

        return fetch('testFE/uploadFile?callback=printName')
            .then(e => e.json())
            .then(data => {
                dispatch(loginSuccess({
                    loginResult: data
                }));
            })
            .catch(ex => {
                dispatch(loginError({
                    errorInfo: ex
                }));
            });
    }
}

export {
    loginFetching, loginSuccess, loginError,
    fetchLogin
};