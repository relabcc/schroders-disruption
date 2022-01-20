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

import Box from './Box';
import { responsive } from './ThemeProvider/theme'

import { customColor } from './utils/getColor';
import { cleanConfig } from './utils/blacklist';

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

const ButtonBase = styled.button.withConfig(cleanConfig)`
  ${buttonStyle};
`;

const InButtonSpan = props => <Box as="span" {...props} />;

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
      <Box as={leftIcon} mr={iconSpacing} verticalAlign={verticalAlign} />
    ) : null}
    <InButtonSpan verticalAlign={verticalAlign}>{children}</InButtonSpan>
    {rightIcon ? (
      <Box as={rightIcon} ml={iconSpacing} verticalAlign={verticalAlign} />
    ) : null}
  </ButtonBase>
));

Button.defaultProps = {
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

Button.Danger = props => (
  <Button
    bg="danger"
    borderColor="danger"
    hoverBg="dangerHover"
    hoverBorder="dangerHover"
    {...props}
  />
);

Button.Secondary = props => (
  <Button
    bg="secondary"
    border="2px solid"
    borderColor="secondary"
    hoverBg="secondaryHover"
    hoverBorder="secondaryHover"
    {...props}
  />
);

Button.White = props => (
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

Button.Outline = props => (
  <Button
    py="0.8rem"
    bg="white"
    border="1px solid"
    borderRadius="1rem"
    color="prussianBlue"
    hoverBg="white"
    hoverBorder="prussianBlue"
    {...props}
  />
);

Button.Outline.Danger = props => (
  <Button.Danger
    border="2px solid"
    borderColor="danger"
    bg="transparent"
    color="danger"
    hoverColor="white"
    {...props}
  />
);

Button.Transparent = forwardRef((props, ref) => (
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

Button.DarkGreen = props => (
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
