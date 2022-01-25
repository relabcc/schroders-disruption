import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../../../components/BackgroundImage'
import Box from '../../../components/Box'
import LottieAnima from '../../../components/LottieAnima'
import { responsive } from '../../../components/ThemeProvider/theme'
import useResponsive from '../../../contexts/mediaQuery/useResponsive'
import skate from './skate.jpg'

// import base from './fields-base.svg'
// import text1 from './fields-text-1.svg'
// import text2 from './fields-text-2.svg'

const GradientBg = styled(BackgroundImage)`
@media screen and (min-width: 769px) {
  ::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(80deg, rgba(255,255,255,0) 70%, rgba(255,255,255,1) 85%);
  }

  ::before {
  content: "";
  display: block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-image: linear-gradient(270deg, rgba(255,255,255,0) 60%, rgba(255,255,255,1) 97%);
  }
}

`

const w = 1120
const h = 484

const Keywords = () => {
  return (
    <Box
      mt={responsive('1.5em', 0)}
      pt={responsive(0, `${h / w * 100}%`)}
      position={responsive('static', 'relative')}
      // overflowY={responsive('vivible', 'hidden')}
    >
      {/* <BackgroundImage ratio={240 / 340} src={base} zIndex={1}>
        <FadeSlideshow crossfade duration={500} timeout={1500}>
          <BackgroundImage ratio={240 / 340} src={text1} />
          <BackgroundImage ratio={240 / 340} src={text2} />
        </FadeSlideshow>
      </BackgroundImage> */}
      <Box
        position={responsive('static', 'absolute')}
        left={`${475 / w * 100}%`}
        top={`${55 / h * 100}%`}
        width={responsive('100%', `${560 / w * 100}%`)}
      >
        <LottieAnima
          src={`${process.env.PUBLIC_URL}/lottie/keywords.json`}
          ratio={340 / 240}
          zIndex={1}
        />
      </Box>
      <Box
        position={responsive('relative', 'absolute')}
        width={responsive('auto', '60%')}
        left={responsive("0%", "18%")}
        bottom="0%"
        transform={responsive('none', 'translateX(-50%)')}
        mx={responsive('-1.6rem', 0)}
        mt={responsive("-23%", 0)}
      >
        <GradientBg
          src={skate}
          ratio={720 / 505}
        />
      </Box>
    </Box>
  )
}

export default Keywords
