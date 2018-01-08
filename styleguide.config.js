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
  updateExample: function(props, exampleFilePath) {
    const { content, ...others } = props
    return {
      ...others,
      content: `
const { ThemeProvider } = require('styled-components');
const theme = require('../../../src/themes').default;

<ThemeProvider theme={theme}>
${content}
</ThemeProvider>
      `
    }
  },
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig: require('react-scripts-ts/config/webpack.config.dev.js')
}