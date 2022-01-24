import React, { forwardRef, useEffect, useRef } from 'react'

import Box from '../../components/Box'
import Button from '../../components/Button'
import Arrow from '../../components/Arrow'

import { responsive } from '../../components/ThemeProvider/theme'
import Sticky from '../../components/Sticky'

const BackToTop = forwardRef(({ loaded ,...props }, ref) => {
  const stickyRef = useRef()
  useEffect(() => {
    if (stickyRef.current) {
      stickyRef.current.update()
    }
  }, [loaded])
  return (
    <Sticky useFixed verticalPosition='bottom' ref={stickyRef}>
      <Box
        textAlign="right"
        px="1em"
        ref={ref}
        {...props}
      >
        <Button.Transparent
          fontSize={responsive('1em', '1.5em')}
          px="0"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            // if (window.__btnBackToTop) {
            //   window.__btnBackToTop.click()
            // }
          }}
          title="返回頂端"
          data-label="返回頂端"
        >
          <Arrow width="2em" my="0.5em" transform="rotate(180deg)" />
          <br />
          返回頂端
        </Button.Transparent>
      </Box>
    </Sticky>
  )
})

export default BackToTop
