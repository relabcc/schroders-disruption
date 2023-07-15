import React from 'react';

import Box from './Box';
import { responsive } from './ThemeProvider/theme';

const Container = (props) => <Box {...props} />;

Container.defaultProps = {
  maxWidth: responsive('51.2em', '118.4em'),
  px: responsive('1.6em', '3.2em'),
  mx: 'auto'
};

Container.displayName = 'Container';

export default Container;
