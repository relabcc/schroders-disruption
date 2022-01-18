import React from 'react'
import BackgroundImage from '../../../components/BackgroundImage'
import Box from '../../../components/Box'
import FadeSlideshow from '../../../components/FadeSlideshow'

import base from './chart2-base.png'
import text1 from './chart-2-text-1.png'
import text2 from './chart-2-text-2.png'

const Keywords = () => {
  return (
    <Box>
      <BackgroundImage ratio={486 / 640} src={base} zIndex={1}>
        <FadeSlideshow crossfade>
          <BackgroundImage ratio={486 / 640} src={text1} />
          <BackgroundImage ratio={486 / 640} src={text2} />
        </FadeSlideshow>
      </BackgroundImage>
      <BackgroundImage mt="-50%" src="https://picsum.photos/250/360?grayscale" ratio={250 / 360} />
    </Box>
  )
}

export default Keywords
