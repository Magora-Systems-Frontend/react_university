import React from 'react';
import { Helmet } from 'react-helmet';
//
import { ErrorBoundary } from 'components';
import { routes } from 'routes';

export function Root() {
  return (
    <div>
      <Helmet itleTemplate="%s - Notes" defaultTitle="Notes">
        <meta name="description" content="Sample Application" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </Helmet>
      <ErrorBoundary>{routes()}</ErrorBoundary>
    </div>
  );
}

Root.propTypes = {};
