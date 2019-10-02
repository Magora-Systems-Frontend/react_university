import React from 'react';
import { Helmet } from 'react-helmet';
//
import { ErrorBoundary } from 'components';
import { routes } from 'routes';

export function Root() {
  return <ErrorBoundary>{routes()}</ErrorBoundary>;
}

Root.propTypes = {};
