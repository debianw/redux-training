'use strict';

var base              = require('./webpack.config.base.js')
  , webpack           = require('webpack')
  , ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = Object.assign(base, {
  module  : Object.assign(base.module, {
    loaders : base.module.loaders.concat({ test : /\.(css|scss)$/,  loader : ExtractTextPlugin.extract('css!sass') }),
  }),
  plugins : base.plugins.concat(
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor : {
        warnings : false,
      },
    })
  ),
});
