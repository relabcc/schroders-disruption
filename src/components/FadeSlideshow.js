import React, { useEffect, useRef, useState, useMemo } from 'react'
import styled, { keyframes } from 'styled-components'
import Box from './Box'

const fadeInKeyframes = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`

const FadeIn = styled(Box.FullAbs)`
animation-name: ${fadeInKeyframes};
`

const FadeSlideshow = ({ children, timeout = 3000, duration = 1000, crossfade }) => {
  const [activeSlide, setActive] = useState(0)
  const [nextActive, setNextActive] = useState()
  const arrChildren = useMemo(() => [].concat(children), [children])
  const fadeInRef = useRef()
  useEffect(() => {
    if (fadeInRef.current) {
      fadeInRef.current.onanimationend = () => {
        setActive(nextActive)
        setNextActive(undefined)
      }
    }
  }, [nextActive])
  useEffect(() => {
    const timer = setTimeout(() => {
      let nextSlide = activeSlide + 1
      if (nextSlide + 1 > arrChildren.length) nextSlide = 0
      setNextActive(nextSlide)
    }, timeout)
    // return clearTimeout(timer)
  }, [activeSlide, timeout, arrChildren])
  const isTransiting = typeof nextActive === 'number'
  return (
    <Box position="relative">
      {crossfade ? (
        <Box opacity={isTransiting ? 0 : 1} transition={isTransiting && `opacity ${duration}ms`}>{arrChildren[activeSlide]}</Box>
      ) : arrChildren[activeSlide]}
      {isTransiting && (
        <FadeIn animationDuration={`${duration}ms`} ref={fadeInRef}>
          {arrChildren[nextActive]}
        </FadeIn>
      )}
    </Box>
  )
}

export default FadeSlideshow
