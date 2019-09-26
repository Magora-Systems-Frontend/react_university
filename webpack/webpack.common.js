const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const makePath = to => path.resolve(__dirname, to);
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const fs = require('fs');
console.log(__dirname);


module.exports = {
  entry: './src',
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: makePath('../src/template.html'),
    }),
    new CopyWebpackPlugin([
      {from: makePath('../src/assets/'), to: makePath('../public/assets/')},
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        IS_BROWSER: true,
      },
    }),

    new WorkboxPlugin.InjectManifest({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      swSrc: './src/sw.js',
      swDest: 'custom-sw.js'
    })
  ],
  module: {
    rules: [
      {
        test: /\.json$/,
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/',
          }
        }]
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          'svg-sprite-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {removeTitle: true},
                {convertColors: {shorthex: false}},
                {convertPathData: false},
              ],
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    plugins: [
      new DirectoryNamedWebpackPlugin({
        honorIndex: true,
        exclude: /node_modules/,
        transformFn(dirName) {
          return [dirName, dirName.toLowerCase()];
        }
      }),
      require('autoprefixer')
    ]
  }
};
