import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './themes';

// This is for styleguidist components render with theme
export default (props: React.Props<{}>) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);