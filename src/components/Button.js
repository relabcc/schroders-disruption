import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import {
  typography,
  space,
  color,
  layout,
  border,
  borderRadius,
  position,
} from 'styled-system';
import themeGet from '@styled-system/theme-get';
import tag from 'clean-tag';

import Box from './Box';
import { responsive } from './ThemeProvider/theme'

import { customColor } from './utils/getColor';
import blacklist from './utils/blacklist';

const active = css`
  ${customColor('hoverColor')};
  ${customColor('hoverBg', 'backgroundColor')};
  ${customColor('hoverBorder', 'borderColor')};
`;

export const buttonStyle = css`
  padding: 0;
  border: none;
  font-family: inherit;
  line-height: 1;
  text-decoration: none;
  ${typography}
  ${layout}
  ${position}
  ${space}
  ${color}
  ${border}
  ${borderRadius}
  appearance: none;
  transition: all ${themeGet('duration', 250)}ms;
  cursor: pointer;
  &:hover,
  &:focus {
    ${props => !props.disabled && active}
    outline: none;
  }
  ${props => props.active && !props.disabled && active}
  ${props =>
    props.disabled &&
    `
    cursor: not-allowed;
    opacity: 0.5;
  `}
`;

const ButtonBase = styled(tag)`
  ${buttonStyle};
`;

const InButtonSpan = props => <Box is="span" {...props} />;

const Button = forwardRef(({
  leftIcon,
  rightIcon,
  iconSpacing,
  children,
  verticalAlign,
  ...props
}, ref) => (
  <ButtonBase {...props} ref={ref}>
    {leftIcon ? (
      <Box is={leftIcon} mr={iconSpacing} verticalAlign={verticalAlign} />
    ) : null}
    <InButtonSpan verticalAlign={verticalAlign}>{children}</InButtonSpan>
    {rightIcon ? (
      <Box is={rightIcon} ml={iconSpacing} verticalAlign={verticalAlign} />
    ) : null}
  </ButtonBase>
));

Button.defaultProps = {
  blacklist,
  is: 'button',
  border: '2px solid',
  borderColor: 'primary',
  bg: 'primary',
  color: 'white',
  hoverColor: 'primary',
  hoverBg: 'primaryHover',
  hoverBorder: 'primaryHover',
  px: '1.5em',
  py: '0.75em',
  fontWeight: 'bold',
  iconSpacing: '0.25em',
  borderRadius: '0.25em',
  display: 'inline-block',
  verticalAlign: 'middle',
};

Button.displayName = 'Button';

Button.danger = props => (
  <Button
    bg="danger"
    borderColor="danger"
    hoverBg="dangerHover"
    hoverBorder="dangerHover"
    {...props}
  />
);

Button.secondary = props => (
  <Button
    bg="secondary"
    border="2px solid"
    borderColor="secondary"
    hoverBg="secondaryHover"
    hoverBorder="secondaryHover"
    {...props}
  />
);

Button.white = props => (
  <Button
    bg="white"
    color="primary"
    border="2px solid"
    borderColor="white"
    hoverBg="primaryHover"
    hoverBorder="primaryHover"
    {...props}
  />
);

Button.outline = props => (
  <Button
    border="2px solid"
    borderColor="primary"
    bg="transparent"
    color="primary"
    hoverColor="white"
    {...props}
  />
);

Button.outline.danger = props => (
  <Button.danger
    border="2px solid"
    borderColor="danger"
    bg="transparent"
    color="danger"
    hoverColor="white"
    {...props}
  />
);

Button.transparent = forwardRef((props, ref) => (
  <Button
    border="1px solid"
    borderColor="transparent"
    bg="transparent"
    color="primary"
    hoverBg="transparent"
    hoverBorder="transparent"
    hoverColor="primary"
    ref={ref}
    {...props}
  />
));

Button.darkGreen = props => (
  <Button
    bg="darkGreen"
    color="white"
    border="none"
    borderColor="white"
    borderRadius="0"
    hoverBorder="primary"
    hoverColor="ceruleanBlue"
    fontSize={responsive('2rem', '2.6rem')}
    py="1.875rem"
    hoverBg="primary"
    {...props}
  />
);

export default Button;
