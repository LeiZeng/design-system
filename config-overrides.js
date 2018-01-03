const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = function override(config, env) {
  config.plugins.push(new ManifestPlugin({
    publicPath: `/assets/`,
  }));
  return config;
}