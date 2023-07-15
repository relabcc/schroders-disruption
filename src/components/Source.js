import React from 'react'

import Box from './Box'
import Container from './Container'

const Source = ({ children, prefix = '資料來源：', ...props }) => {
  return (
    <Box
      py="1.4em"
      bg="bgGray"
      whiteSpace="per-wrap"
      fontSize="1.25em"
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
