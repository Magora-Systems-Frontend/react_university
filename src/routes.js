import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
//
import App from 'pages/App';
import HomePage from 'pages/HomePage/Loadable';
import RegistrationFormPage from 'pages/RegistrationFormPage/index';
import PasswordSetPage from 'pages/PasswordSetPage/index';
import NotFoundPage from 'pages/NotFoundPage/Loadable';
import { history } from './store';
import { ROUTES } from './config/constants';

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
      <Route
        exact
        path={ROUTES.ADMIN_PANEL}
        render={(props) => (
          <App>
            <NotFoundPage {...props} />
          </App>
        )}
      />
      <Route
        exact
        path={ROUTES.REGISTRATION_FORM}
        render={(props) => (
          <App>
            <RegistrationFormPage {...props} />
          </App>
        )}
      />
      <Route
        exact
        path={ROUTES.PASSWORD_SET_FORM}
        render={(props) => (
          <App>
            <PasswordSetPage {...props} />
          </App>
        )}
      />
      <Route
        render={(props) => (
          <App>
            <NotFoundPage {...props} />
          </App>
        )}
      />
    </Switch>
  </ConnectedRouter>
);

export default routes;
