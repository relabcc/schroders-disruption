import React, { useState } from 'react'

import useResponsive from '../contexts/mediaQuery/useResponsive'

import Intro from './Intro'
import Sections from './Sections'
import Fund from './Fund'
import BackToTop from './BackToTop'

const HomePage = () => {
  const { isMobile, isLaptop } = useResponsive()
  return (
    <>
      <Intro isLaptop={isLaptop} isMobile={isMobile} />
      <Sections isMobile={isMobile} />
      <Fund />
      <BackToTop zIndex={999} />
    </>
  )
}

export default HomePage
