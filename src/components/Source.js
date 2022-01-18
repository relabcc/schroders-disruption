import React from 'react'

import Box from './Box'
import { responsive } from './ThemeProvider/theme'

const Source = ({ children, ...props }) => {
  return (
    <Box
      px="1.6rem"
      py="1.4rem"
      bg="lightGray"
      whiteSpace="per-wrap"
      fontSize={responsive('1.2rem', '1.6rem')}
      {...props}
    >
      <Box
        mx="auto"
        maxWidth={responsive('48rem', '112rem')}
      >
        資料來源：{children}
      </Box>
    </Box>
  )
}

export default Source
