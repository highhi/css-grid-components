const path = require('path');
const webpack = require('webpack');
const IS_DEV = process.env.NODE_ENV === 'development';
const DIST_DIR = 'dist';

module.exports = {
  devtool: IS_DEV ? 'inline-source-map' : '',

  entry: Object.assign({
    index: path.join(__dirname, 'src', 'index.js'),
  }),

  output: {
    path: path.resolve(__dirname, DIST_DIR),
    filename: '[name].js'
  },

  module: {
    rules: [
      { test: /\.js?$/, use: 'babel-loader', exclude: [/node_modlues/] },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
    }),
  ],
  
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
};