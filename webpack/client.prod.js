const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  context: path.join(__dirname, '../'),
  devtool: 'source-map',
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, '../public'), // directory where bundles are built
    filename: './bundle.min.js',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      resolve: { extensions: [".js", ".jsx"] },
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
      test: /\.(ttf|eot|woff|woff2|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {},
        },
      ],
    },
    ],
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
};
