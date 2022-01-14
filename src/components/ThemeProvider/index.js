import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './global-styles';

import theme from './theme';

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      {children}
      <GlobalStyles />
    </>
  </ThemeProvider>
);
