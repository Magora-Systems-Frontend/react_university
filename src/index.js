import React from 'react';
import ReactDOM from 'react-dom';
//
import { NODE_ENV, API_URL, API_VERSION } from 'config/constants';
import { Root } from 'pages';
import * as axiosClient from 'utils/api/axiosClient';
import store from './store';

import './styles/app.scss';

const MOUNT_NODE = document.getElementById('root');

if (NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept();
  }
}

axiosClient.init({ store, API_URL, API_VERSION });
ReactDOM.render(<Root store={store} />, MOUNT_NODE);
