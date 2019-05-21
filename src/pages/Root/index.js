import React from 'react';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import PT from 'prop-types';
//
import { MainWrapper, ErrorBoundary } from 'components';
import { routes } from 'routes';

export function Root({ store }) {
  return (
    <Provider store={store}>
      <MainWrapper>
        <Helmet itleTemplate="%s - Notes" defaultTitle="Notes">
          <meta name="description" content="Sample Application" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
        </Helmet>
        <ErrorBoundary>{routes}</ErrorBoundary>
      </MainWrapper>
    </Provider>
  );
}

Root.propTypes = {
  store: PT.objectOf(PT.oneOfType([PT.func, PT.object])).isRequired,
};
