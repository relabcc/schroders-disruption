import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import Text from '../Text';
import Box from '../Box';
import Image from '../Image';

import lens from './lens.svg'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  animation: ${spin} 2s infinite;
`;

export default function Loading({ text, ...props }) {
  return (
    <Box textAlign="center" {...props}>
      <Loader>
        <Image src={lens} />
      </Loader>
      <Text fontSize="1em" mt="1em">{text}</Text>
    </Box>
  );
}

Loading.propTypes = {
  text: PropTypes.string,
};

Loading.defaultProps = {
  text: 'Loading...',
  width: '5em',
};
