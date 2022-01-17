import React from 'react'
import { flexbox } from 'styled-system';
import styled from 'styled-components';

import Box from './Box';
import blacklist from './utils/blacklist'

const Flex = styled(Box)`
  ${flexbox}
`;

Flex.defaultProps = {
  display: 'flex',
  blacklist,
};

Flex.displayName = 'Flex';

Flex.Relative = props => <Flex position="relative" overflow="hidden" {...props} />

export default Flex;
