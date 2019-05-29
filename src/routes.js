import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from 'config/constants';
// pages
import { App, HomePage } from 'pages';

export const routes = () => (
  <App>
    <Switch>
      <Route exact path={ROUTES.HOME_PAGE} render={(props) => <HomePage {...props} />} />
    </Switch>
  </App>
);
