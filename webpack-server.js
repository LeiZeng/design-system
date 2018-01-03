const config = require('react-scripts-ts/config/webpack.config.prod');
const path = require('path');
const webpack = require('webpack');

module.exports = function serverRenderConfig() {
  config.entry = './src/server/index.tsx';
  config.externals = [
    path.resolve(__dirname, `./build/manifest.json`),
  ];
  config.output = {
    // The build folder.
    path: path.resolve('./server'),
    filename: 'index.js',
    publicPath: path.resolve('./public'),
  };
  config.node = {};
  config.plugins = [
  ];
  return config;
}