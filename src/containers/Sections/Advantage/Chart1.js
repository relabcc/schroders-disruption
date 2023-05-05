import React from 'react'
// import loadable from '@loadable/component'

import Box from '../../../components/Box'

import { Media, responsive } from '../../../components/ThemeProvider/theme'
import LottieAnima from '../../../components/LottieAnima'

import chart1 from '../../../lottie/chart-1.json'
import chart1d from '../../../lottie/chart-1-desktop.json'

// import useResponsive from '../../../contexts/mediaQuery/useResponsive'

const Chart1 = () => {
  // const { isMobile } = useResponsive()
  return (
    <Box mt={responsive('-7.5%', '0')} overflowY="hidden">
      <Box width="100%">
        <Media at="mobile">
          <LottieAnima data={chart1} ratio={352 / 300} />
        </Media>
        <Media greaterThan="mobile">
          <LottieAnima data={chart1d} ratio={1120 / 482} />
        </Media>
      </Box>
    </Box>
  )
};

export default Chart1;
