import React, { forwardRef } from 'react'
import styled from 'styled-components';

import Box from './Box';

const AspectRatioBox = styled(Box)`
  ${(props) => props.height ? '' : `padding-top: ${1 / props.ratio * 100}%;`}
`;

const AspectRatio = forwardRef(({ children, ...props }, ref) => (
  <AspectRatioBox ref={ref} {...props}>
    {children && (
      <Box.FullAbs>
        {children}
      </Box.FullAbs>
    )}
  </AspectRatioBox>
))

AspectRatio.defaultProps = {
  position: 'relative',
  ratio: 1,
};

AspectRatio.displayName = 'AspectRatio';

export default AspectRatio;
