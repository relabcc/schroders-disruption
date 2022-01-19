import React, { forwardRef, useEffect, useRef } from 'react'
import loadable from '@loadable/component'
import useSWR from 'swr'

import AspectRatio from './AspectRatio'
import Box from './Box'
import withLazyload from '../utils/withLazyload'

const Lottie = loadable.lib(() => import('lottie-web'))

const LottieAnia = ({ lottie, data, loop = true, onLoad = () => {} }) => {
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
  }, [data, loop, lottie, onLoad])
  return <Box.FullAbs ref={ref} />
}

const LottieAnima = forwardRef(({ src, ratio = 1, loop, onLoad, ...props }, ref) => {
  const { data } = useSWR(src)
  return (
    <AspectRatio ratio={ratio} {...props} ref={ref}>
      <Lottie>
        {({ default: lottie }) => data ? (
          <LottieAnia lottie={lottie} data={data} loop={loop} onLoad={onLoad} />
        ) : null}
      </Lottie>
    </AspectRatio>
  )
})

export default withLazyload(LottieAnima)
