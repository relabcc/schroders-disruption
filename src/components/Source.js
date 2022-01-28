import React from 'react'

import Box from './Box'
import Container from './Container'
import { responsive } from './ThemeProvider/theme'

const Source = ({ children, prefix = '資料來源：', ...props }) => {
  return (
    <Box
      py="1.4rem"
      bg="bgGray"
      whiteSpace="per-wrap"
      fontSize={responsive('1rem', '1em')}
      color="gray"
      {...props}
    >
      <Container>
        {prefix}{children}
      </Container>
    </Box>
  )
}

export default Source
