import React from 'react';
import {
    Route, Switch
} from 'react-router-dom';

import Resume from '../container/resume/resume.jsx';
import Share from '../container/share/share.jsx';

export default (
    <Switch>
        <Route path='/app/resume' component={Resume} />
        <Route path='/app/share' component={Share} />
    </Switch >
);