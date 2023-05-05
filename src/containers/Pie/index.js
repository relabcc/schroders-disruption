import React, { forwardRef, useState } from 'react'
import Box from '../../components/Box'
import LottieAnima from '../../components/LottieAnima'
import BackgroundImage from '../../components/BackgroundImage'
import FadeSlideshow from '../../components/FadeSlideshow'
// import withLazyload from '../../utils/withLazyload'
import pie from '../../lottie/pie.json'

const pics = [
  require('./01.jpg'),
  require('./02.jpg'),
  require('./03.jpg'),
]

const Pie = forwardRef((p, ref) => {
  const [loaded, setLoaded] = useState(0)
  return (
    <Box position="relative" ref={ref}>
      <LottieAnima data={pie} ratio={1} loop={false} onLoad={() => setLoaded(1)} />
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
        <FadeSlideshow duration={500} timeout={1000}>
          {pics.map((src, i) => <BackgroundImage ratio={1} src={src} key={i} />)}
        </FadeSlideshow>
      </Box>
    </Box>
  )
})

export default Pie
