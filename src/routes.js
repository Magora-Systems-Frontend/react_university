import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { ROUTES } from 'config/constants';
// pages
import {
  App,
  HomePage,
  NotFoundPage,
  PasswordSetPage,
  RegistrationFormPage,
  UserProfilePage,
  UserProfileEditPage,
} from 'pages';
//
import { history } from './store';

export const routes = (
  <ConnectedRouter history={history}>
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
  </ConnectedRouter>
);
