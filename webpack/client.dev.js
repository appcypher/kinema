const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  context: path.join(__dirname, '../'),
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    filename: 'bundle.min.js',
    publicPath: '/public', // directory where dev-server looks at for bundle
  },
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      resolve: { extensions: [".js", ".jsx"] },
      enforce: 'pre',
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-1'],
        },
      },
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {},
        },
      ],
    },
    {
      test: /\.(ttf|eot|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {},
        },
      ],
    },
    {
      test: /\.(svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'svg-url-loader',
          options: {},
        },
      ],
    },
    ],
  },
  plugins: [],
};
