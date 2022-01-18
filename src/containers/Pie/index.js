import React from 'react'
import Box from '../../components/Box'
import LottieAnima from '../../components/LottieAnima'
import BackgroundImage from '../../components/BackgroundImage'
import FadeSlideshow from '../../components/FadeSlideshow'
import withLazyload from '../../utils/withLazyload'

const Pie = () => (
  <Box position="relative">
    <LottieAnima src={`${process.env.PUBLIC_URL}/pie.json`} ratio={1} loop={false} />
    <Box
      position="absolute"
      borderRadius="100%"
      width="35.5%"
      overflow="hidden"
      left="50%"
      top="50.25%"
      transform="translate(-50%,-50%)"
    >
      <FadeSlideshow>
        <BackgroundImage ratio={1} src="https://picsum.photos/seed/happy/512/512" />
        <BackgroundImage ratio={1} src="https://picsum.photos/seed/sad/512/512" />
      </FadeSlideshow>
    </Box>
  </Box>
)

export default withLazyload(Pie)
