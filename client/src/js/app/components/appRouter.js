import React from 'react';
import { Router, Switch, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import App from './app';
import { ConferenceRouter } from '../../conference';

const AppRouter = () => {
    const history = createHistory();

    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact={true} path="/" component={App} />
                    <Route path="/conference" component={ConferenceRouter} />
                </Switch>
            </Router>
        </div>
    );
};

export default AppRouter;
