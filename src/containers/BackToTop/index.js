import React, { forwardRef } from 'react'

import Box from '../../components/Box'
import Button from '../../components/Button'
import Arrow from '../../components/Arrow'

import { responsive } from '../../components/ThemeProvider/theme'
import Sticky from '../../components/Sticky'

const BackToTop = forwardRef((props, ref) => {
  return (
    <Box position="relative" pb={responsive('5em', '7.5em')}>
      <Sticky useFixed verticalPosition='bottom'>
        <Box
          textAlign="right"
          px="1em"
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
      </Sticky>
    </Box>
  )
})

export default BackToTop
