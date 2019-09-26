
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
// css plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const makePath = to => path.resolve(__dirname, to);

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[hash]-bundle.js',
    path: makePath('../public'),
    publicPath: './',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],

  optimization: {
    minimizer: [
      new TerserPlugin({ test: /\.js(\?.*)?$/i }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
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
});

