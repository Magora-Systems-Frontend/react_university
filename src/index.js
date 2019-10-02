import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//
import { NODE_ENV, API_URL_PROD, API_VERSION } from 'config/constants';
import { Root } from 'pages/Root';
import * as axiosClient from 'utils/api/axiosClient';
import { configureStore } from './store';

import './styles/app.scss';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/custom-sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
        // registration.pushManager.subscribe({
        //   userVisibleOnly: true,
        //   applicationServerKey:
        //     'BEyzpasKaje2mtvHnQ587dk0B150SG4jNjXLqV53t01qOPjqZ5KuaVRI_B4UWILDc9eYFY2Ynwt-iTTfrJ9QP00',
        // });
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

const MOUNT_NODE = document.getElementById('root');

if (NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept();
  }
}

let initialState = {};
if (window && window.REDUX_STATE) {
  initialState = window.REDUX_STATE;
  delete window.REDUX_STATE;
}
const store = configureStore(initialState);

axiosClient.init({ store, API_URL_PROD, API_VERSION });
ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <Root />
    </Provider>
  </BrowserRouter>,
  MOUNT_NODE
);
