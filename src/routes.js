import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ROUTES } from 'config/constants';
// pages
import { App, HomePage } from 'pages';
//
import { history } from './store';

export const routes = (
  <BrowserRouter history={history}>
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
  </BrowserRouter>
);
