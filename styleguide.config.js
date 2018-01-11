const path = require('path');

module.exports = {
  sections: [
    {
      name: 'Introduction',
      content: 'src/docs/introduction.md'
    },
    {
      name: 'Atoms',
      components: 'src/atoms/**/*.{ts,tsx}'
    }
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/Wrapper')
  },
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig: require('react-scripts-ts/config/webpack.config.dev.js')
}