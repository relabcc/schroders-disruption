import React from 'react'
import BackgroundImage from '../../../components/BackgroundImage'
import Box from '../../../components/Box'
import FadeSlideshow from '../../../components/FadeSlideshow'

import base from './fields-base.svg'
import text1 from './fields-text-1.svg'
import text2 from './fields-text-2.svg'

const Keywords = () => {
  return (
    <Box>
      <BackgroundImage ratio={240 / 340} src={base} zIndex={1}>
        <FadeSlideshow crossfade>
          <BackgroundImage ratio={240 / 340} src={text1} />
          <BackgroundImage ratio={240 / 340} src={text2} />
        </FadeSlideshow>
      </BackgroundImage>
      <BackgroundImage mt="-50%" src="https://picsum.photos/250/360?grayscale" ratio={250 / 360} />
    </Box>
  )
}

export default Keywords
