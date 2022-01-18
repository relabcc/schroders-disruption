import React from 'react'

import Box from './Box'
import { responsive } from './ThemeProvider/theme'

const Source = ({ children, ...props }) => {
  return (
    <Box
      mb={responsive('8.5rem', '10em')}
      borderTop="1px solid"
      pt="1em"
      textAlign="justify"
      {...props}
    >
      資料來源：{children}
    </Box>
  )
}

export default Source
