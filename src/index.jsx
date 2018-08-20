import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './app/store.jsx';

import AppFrame from './app/appFrame.jsx';
import Login from './app/container/login/login.jsx';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/app' component={AppFrame} />
                <Route path='/login' component={Login} />
                {/* 默认去login */}
                <Route path='*' component={Login} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('app'));

if (module.hot)
    module.hot.accept();
