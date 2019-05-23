const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const makePath = to => path.resolve(__dirname, to);
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src',
  plugins: [
    new CopyWebpackPlugin([
      { from: makePath('../src/assets'), to: makePath('../public/assets/') },
    ])
  ],
  output: {
    filename: 'bundle.js',
    path: makePath('../public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(scss|sass)$/,
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
      {
        test: /\.(woff(2)?|ttf|eot|svg|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/',
          }
        }]
      }
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
