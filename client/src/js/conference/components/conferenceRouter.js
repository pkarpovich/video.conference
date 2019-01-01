import React from 'react';
import { Router, Switch, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import CallComponent from './call';
import AnswerComponent from './answer';

const ConferenceRouter = () => {
    const history = createHistory();

    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route
                        path="/conference/answer"
                        component={AnswerComponent}
                    />
                    <Route path="/conference/call" component={CallComponent} />
                </Switch>
            </Router>
        </div>
    );
};

export default ConferenceRouter;
