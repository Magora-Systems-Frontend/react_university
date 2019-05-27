import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { ROUTES } from 'config/constants';
// pages
import { App, HomePage } from 'pages';
//
import { history } from './store';

export const routes = (
  <Router history={history}>
    <Switch>
      <Route
        exact
        path={ROUTES.HOME_PAGE}
        render={(props) => (
          <App>
            <HomePage {...props} />
          </App>
        )}
      />
    </Switch>
  </Router>
);
