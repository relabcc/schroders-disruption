import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './global-styles';

import theme, { MediaContextProvider } from './theme';

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <MediaContextProvider>
      <>
        {children}
        <GlobalStyles />
      </>
    </MediaContextProvider>
  </ThemeProvider>
);
