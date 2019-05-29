const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const config = require('../bin');
const makePath = to => path.resolve(__dirname, to);

const { API_URL = 'http://localhost:8021' } = process.env || {};

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[hash]-bundle.js',
    path: makePath('../public/assets'),
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    hot: true,
    host: config.HOST,
    port: config.PORT,
    proxy: {
      '/api/**': {
        target: API_URL,
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: makePath('../src/template.html/'),
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve('../node_modules/bootstrap/scss/mixins')
              ]
            }
          }
        ]
      },
    ],
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
});
