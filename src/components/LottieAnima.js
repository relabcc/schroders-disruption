import React, { forwardRef, useEffect, useRef } from 'react'
import loadable from '@loadable/component'

import useSWR from 'swr'

import AspectRatio from './AspectRatio'
import Box from './Box'

const Lottie = loadable.lib(() => import('lottie-web'))

const LottieAnia = ({ lottie, data, loop = true }) => {
  const ref = useRef()

  useEffect(() => {
    if (!ref.current.children.length) {
      setTimeout(() => {
        lottie.loadAnimation({
          container: ref.current, // the dom element
          renderer: 'svg',
          loop,
          autoplay: true,
          animationData: data, // the animation data
          // onComplete: console.log
        });
      })
    }
  }, [data])
  return (
    <Box.FullAbs ref={ref} />
  )
}

const LottieAnima = forwardRef(({ src, ratio = 1, loop, ...props }, ref) => {
  const { data } = useSWR(src)
  return (
    <AspectRatio ratio={ratio} {...props} ref={ref}>
      <Lottie>
        {({ default: lottie }) => data && (
          <LottieAnia lottie={lottie} data={data} loop={loop} />
        )}
      </Lottie>
    </AspectRatio>
  )
})

export default LottieAnima
