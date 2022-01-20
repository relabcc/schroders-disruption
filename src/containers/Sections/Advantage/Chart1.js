import React from 'react'
// import loadable from '@loadable/component'

import Box from '../../../components/Box'

import { responsive } from '../../../components/ThemeProvider/theme'
import LottieAnima from '../../../components/LottieAnima'

import useResponsive from '../../../contexts/mediaQuery/useResponsive'

const Chart1 = () => {
  const { isMobile } = useResponsive()
  return (
    <Box mt={responsive('-22%', '0')} mr={responsive("-1.5em", 0)} overflowY="hidden">
      <Box width="100%">
        {isMobile
          ? <LottieAnima src={`${process.env.PUBLIC_URL}/chart-1.json`} ratio={352 / 300} />
          : <LottieAnima src={`${process.env.PUBLIC_URL}/chart-1-desktop.json`} ratio={1120 / 482} />}
      </Box>
    </Box>
  )
};

export default Chart1;
