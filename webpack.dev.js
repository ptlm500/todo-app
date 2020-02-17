const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    port: 3000,
    hotOnly: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      inject: 'body'
    })
  ]
});
