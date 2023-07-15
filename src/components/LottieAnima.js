import React, { forwardRef, useEffect, useRef } from 'react'
import lottie from 'lottie-web'

import AspectRatio from './AspectRatio'
import Box from './Box'
import withLazyload from '../utils/withLazyload'

const LottieAnia = ({ data, loop = true, onLoad = () => {} }) => {
  const ref = useRef()

  useEffect(() => {
    if (!ref.current.children.length) {
      setTimeout(() => {
        const anima = lottie.loadAnimation({
          container: ref.current, // the dom element
          renderer: 'svg',
          loop,
          autoplay: true,
          animationData: data, // the animation data
        });
        anima.onEnterFrame = onLoad
      })
    }
  }, [data, loop, onLoad])
  return <Box.FullAbs ref={ref} />
}

const LottieAnima = forwardRef(({ data, ratio = 1, loop, onLoad, ...props }, ref) => {
  return (
    <AspectRatio ratio={ratio} {...props} ref={ref}>
      <LottieAnia data={data} loop={loop} onLoad={onLoad} />
    </AspectRatio>
  )
})

export default withLazyload(LottieAnima)
