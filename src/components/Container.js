import React from 'react';

import Box from './Box';

const Container = (props) => <Box {...props} />;

Container.defaultProps = {
  className: 'container',
};

Container.displayName = 'Container';

export default Container;
