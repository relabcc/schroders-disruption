import React from 'react';

import Box from './Box';
import { responsive } from './ThemeProvider/theme';

const Container = (props) => <Box {...props} />;

Container.defaultProps = {
  maxWidth: responsive('51.2rem', '118.4rem'),
  px: responsive('1.6rem', '3.2rem'),
  mx: 'auto'
};

Container.displayName = 'Container';

export default Container;
