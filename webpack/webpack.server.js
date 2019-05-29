const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const makePath = to => path.resolve(__dirname, to);

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './server/index.js',
  output: {
    path: makePath('../public'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sass|css|scss|svg|png)$/,
        use: 'ignore-loader',
      }
    ],
  },
  externals: [webpackNodeExternals()],
};
