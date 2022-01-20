import React from 'react'
// import loadable from '@loadable/component'

import Box from '../../../components/Box'

import { Media, responsive } from '../../../components/ThemeProvider/theme'
import LottieAnima from '../../../components/LottieAnima'

// import useResponsive from '../../../contexts/mediaQuery/useResponsive'

const Chart1 = () => {
  // const { isMobile } = useResponsive()
  return (
    <Box mt={responsive('-7.5%', '0')} mr={responsive("-1.5em", 0)} overflowY="hidden">
      <Box width="100%">
        <Media at="mobile">
          <LottieAnima src={`${process.env.PUBLIC_URL}/lottie/chart-1.json`} ratio={352 / 300} />
        </Media>
        <Media greaterThan="mobile">
          <LottieAnima src={`${process.env.PUBLIC_URL}/lottie/chart-1-desktop.json`} ratio={1120 / 482} />
        </Media>
      </Box>
    </Box>
  )
};

export default Chart1;
