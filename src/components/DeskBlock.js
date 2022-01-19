import React from 'react';

import Box from './Box';
import { responsive } from './ThemeProvider/theme';

const DeskBlock = (props) => <Box {...props} />;

DeskBlock.defaultProps = {
  maxWidth: responsive('auto', '93rem'),
};

export default DeskBlock;
