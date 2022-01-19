import React from 'react'

import Box from './Box'
import Container from './Container'
import { responsive } from './ThemeProvider/theme'

const Source = ({ children, ...props }) => {
  return (
    <Box
      py="1.4rem"
      bg="bgGray"
      whiteSpace="per-wrap"
      fontSize={responsive('1.2rem', '1.6rem')}
      {...props}
    >
      <Container>
        資料來源：{children}
      </Container>
    </Box>
  )
}

export default Source
