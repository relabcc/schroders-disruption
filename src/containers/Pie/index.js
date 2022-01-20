import React, { forwardRef, useState } from 'react'
import Box from '../../components/Box'
import LottieAnima from '../../components/LottieAnima'
import BackgroundImage from '../../components/BackgroundImage'
import FadeSlideshow from '../../components/FadeSlideshow'
// import withLazyload from '../../utils/withLazyload'

const Pie = forwardRef((p, ref) => {
  const [loaded, setLoaded] = useState(0)
  return (
    <Box position="relative" ref={ref}>
      <LottieAnima src={`${process.env.PUBLIC_URL}/lottie/pie.json`} ratio={1} loop={false} onLoad={() => setLoaded(1)} />
      <Box
        position="absolute"
        borderRadius="100%"
        width="35.5%"
        overflow="hidden"
        left="50%"
        top="50.25%"
        transform="translate(-50%,-50%)"
        opacity={loaded}
      >
        <FadeSlideshow>
          <BackgroundImage ratio={1} src="https://picsum.photos/seed/happy/512/512" />
          <BackgroundImage ratio={1} src="https://picsum.photos/seed/sad/512/512" />
        </FadeSlideshow>
      </Box>
    </Box>
  )
})

export default Pie
