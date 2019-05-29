import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { REDUX_LOGGER_IS_ENABLED } from 'config/constants';
//
// import { loadStore } from 'utils/localStorage';
import reduxLoggerMiddleware from 'utils/reduxLoggerMiddleware';
import createReducer from './reducers';

export function configureStore(initialState = {}) {
  const middleware = [thunk];

  // const initialState = loadStore();
  const injectedReducers = {};
  const enhancers = [];

  if (REDUX_LOGGER_IS_ENABLED) {
    middleware.push(reduxLoggerMiddleware);
  }

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  const store = createStore(createReducer({}), initialState, composedEnhancers);

  store.injectedReducers = injectedReducers;

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
