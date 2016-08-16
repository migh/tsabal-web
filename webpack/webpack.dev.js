var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('assets','dist'),
    publicPath: 'http://localhost:1337/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  }
});
