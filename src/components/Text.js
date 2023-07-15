import React, { forwardRef } from 'react';
import styled from 'styled-components';
import range from 'lodash/range';
import {
  typography,
  space,
  color,
  display,
  position,
} from 'styled-system';

import { cleanConfig } from './utils/blacklist';
import injectProps from './utils/injectProps';
import { responsive } from './ThemeProvider/theme';

const Text = styled.p.withConfig(cleanConfig)`
  margin-top: 0;
  margin-bottom: 0;
  ${typography}
  ${display}
  ${space}
  ${color}
  ${position}
  ${injectProps('textTransform')}
  ${injectProps('whiteSpace')}
`;

Text.defaultProps = {
  fontSize: responsive('1.6em', '2em'),
  lineHeight: 1.5,
};

Text.Inline = (props) => <Text as="span" {...props} />;
Text.Bold = (props) => <Text fontWeight="bold" {...props} />;
Text.Thin = (props) => <Text fontWeight="200" {...props} />;
Text.Desc = (props) => <Text fontWeight="500" fontSize={responsive('1.8em', '2.4em')} {...props} />;
Text.Title = forwardRef((props, ref) => <Text ref={ref} fontWeight="bold" color="white" fontSize={responsive('2.4em', '3.6em')} {...props} />)
Text.SubTitle = forwardRef((props, ref) => <Text.Title ref={ref} fontWeight="bold" color="purple" fontSize={props.titleFontSize || responsive('2em', '2.8em')} {...props} />)
Text.ModuleTitle = forwardRef((props, ref) => <Text.Title ref={ref} fontWeight="bold" {...props} />)
Text.SmallTitle = forwardRef((props, ref) => <Text ref={ref} fontWeight="bold" color="white" fontSize={responsive('1.8em', '2.4em')} {...props} />)

range(1, 7).forEach((key) => {
  const h = `h${key}`;
  Text[h] = (props) => (
    <Text
      as={h}
      fontSize={`${1 + ((6 - key) * 0.125)}em`}
      {...props}
    />
  );
});

Text.displayName = 'Text';

export default Text;
