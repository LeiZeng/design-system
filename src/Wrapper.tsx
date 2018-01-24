import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './components/themes';
import { BrowserRouter } from 'react-router-dom';

// This is for styleguidist components render with theme
export default (props: React.Props<{}>) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
  </BrowserRouter>
);