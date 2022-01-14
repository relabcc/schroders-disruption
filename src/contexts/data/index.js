import React from 'react';
import useSWR from 'swr';
import isFunction from 'lodash/isFunction'

import Box from '../../components/Box'
import Loading from '../../components/Loading'

const Data = ({ path, children }) => {
  const { error, data } = useSWR(path) // onMount
  if (error) console.error(error)

  return (
    <Box position="relative">
      {error && 'Error!'}
      {data ? isFunction(children) ? children(data) : children : (
        <Box.fullAbs bg="rgba(255,255,255,0.5)">
          <Box.absCenter><Loading color="prussianBlue" /></Box.absCenter>
        </Box.fullAbs>
      )}
    </Box>
  )
};

export default Data;
