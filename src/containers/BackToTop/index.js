import React, { forwardRef } from 'react'

import Box from '../../components/Box'
import Button from '../../components/Button'
import Arrow from '../../components/Arrow'

import { responsive } from '../../components/ThemeProvider/theme'

const BackToTop = forwardRef(({ isSticky, distanceFromBottom, ...props }, ref) => {
  return (
    <Box
      textAlign="right"
      px={!isSticky && "1em"}
      position={isSticky ? 'fixed' : 'relative'}
      bottom={isSticky && "1em"}
      right={isSticky && "1em"}
      ref={ref}
      {...props}
    >
      <Button.transparent
        fontSize={responsive('1em', '1.5em')}
        px="0"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          if (window.__btnBackToTop) {
            window.__btnBackToTop.click()
          }
        }}
      >
        <Arrow width="2em" my="0.5em" transform="rotate(180deg)" />
        <br />
        返回頂端
      </Button.transparent>
    </Box>
  )
})

export default BackToTop
