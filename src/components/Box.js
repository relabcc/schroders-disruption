import React, { forwardRef } from 'react';
import styled from 'styled-components';
import {
  space,
  layout,
  typography,
  position,
  color,
  borderRadius,
  zIndex,
  border,
  flex,
  opacity,
  style,
  background,
  backgroundImage,
  backgroundPosition,
  backgroundSize,
} from 'styled-system';

import { cleanConfig } from './utils/blacklist';
import injectProps from './utils/injectProps';
import { responsive } from './ThemeProvider/theme';
import Text from './Text';

const Box = styled.div.withConfig(cleanConfig)`
  ${space}
  ${layout}
  ${position}
  ${background}
  ${backgroundImage}
  ${backgroundPosition}
  ${backgroundSize}
  ${typography}
  ${color}
  ${position}
  ${zIndex}
  ${border}
  ${flex}
  ${borderRadius}
  ${opacity}
  ${injectProps('whiteSpace')}
  ${injectProps('overflow')}
  ${injectProps('transform')}
  ${injectProps('transition')}
  ${injectProps('pointerEvents')}
  ${injectProps('animationDuration')}
  ${style({
    prop: 'zOrder',
    cssProperty: 'zIndex',
    key: 'zOrder',
  })}
  ${({ onClick }) => onClick && 'cursor: pointer;'}
`;

Box.displayName = 'Box';

Box.Inline = (props) => <Box as="span" display="inline-block" verticalAlign="middle" {...props} />;
Box.Relative = (props) => <Box position="relative" {...props} />;
Box.Absolute = (props) => <Box position="absolute" {...props} />;
Box.FullAbs = forwardRef((props, ref) => <Box ref={ref} position="absolute" top="0" bottom="0" left="0" right="0" {...props} />);
Box.AbsCenter = forwardRef((props, ref) => <Box ref={ref} position="absolute" top="50%" left="50%" {...props} />);
Box.SubTitle = forwardRef((props, ref) => <Box ref={ref} fontWeight="bold" color="titleBlue" fontSize={responsive('1.5em', '1.875em')} {...props} />)
Box.Title = forwardRef(({ children , ...props}, ref) => (
  <Box ref={ref} pb="0.25em" mb="2rem" borderBottom={responsive('5px solid', '10px solid')} color="titleBlue" {...props}>
    <Text.Title>{children}</Text.Title>
  </Box>
))
Box.BgTitle = forwardRef(({ children, smallTitle, ...props }, ref) => (
  <Box ref={ref} bg="prussianBlue" px="1.6rem" pb="1.6rem" pt="3.2rem" {...props}>
    <Box maxWidth={responsive('48rem', '112rem')} mx="auto">
      <Text.SmallTitle>{smallTitle}</Text.SmallTitle>
      <Text.Title>{children}</Text.Title>
    </Box>
  </Box>
))

export default Box;
