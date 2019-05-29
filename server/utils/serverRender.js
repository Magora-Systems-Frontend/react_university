import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { ServerStyleSheet } from 'styled-components';
import Helmet from 'react-helmet';

import { Root } from '../../src/pages';
import { configureStore } from '../../src/store';

const path = require('path');
const fs = require('fs');

export default (req, res) => {

  // get path of index.html
  const filePath = path.resolve('./public/assets/index.html');

  // get html template
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      return res.status(404).end();
    }

    // configure store
    const initialState = req.reduxInitialState || {};
    const store = configureStore(initialState);

    const reduxState = store.getState();
    delete reduxState.router;
    const stringifiedReduxState = JSON.stringify( reduxState ).replace(/</g, '\\u003c'); // because XSS

    // render the app as a string
    const context = {};

    const sheet = new ServerStyleSheet(); // need for getting styled-components tags

    const componentHTML = ReactDOMServer.renderToString(sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Root />
        </StaticRouter>
      </Provider>
    ));

    const helmet = Helmet.renderStatic(); // get helmet data

    const styleTags = sheet.getStyleTags(); // get styled-components tags

    // inject the rendered app with additional data into our html and send it

    let resultHtml = htmlData.replace(
      '<title>Udemy clone</title>',
      `${helmet.title.toString()}${helmet.meta.toString()}`,
    );

    resultHtml = resultHtml.replace(
      '<meta name="head-ssr-replace">',
      `${styleTags}`,
    );

    resultHtml = resultHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${componentHTML}</div><script>window.REDUX_STATE = ${stringifiedReduxState};</script>`
    );

    return res.send(resultHtml);
  });
}
