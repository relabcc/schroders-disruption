import React, { useState } from 'react'
import { useLocation } from 'react-use'
import loadable from '@loadable/component'

import useResponsive from '../contexts/mediaQuery/useResponsive'

// import Intro from './Intro'
// import Sections from './Sections'
// import Fund from './Fund'
// import BackToTop from './BackToTop'
const Feature = loadable(() => import('./Sections/Feature'))
const Advantage = loadable(() => import('./Sections/Advantage'))
const BackToTop = loadable(() => import('./BackToTop'))
const Fund = loadable(() => import('./Fund'))
const Intro = loadable(() => import('./Intro'))

const HomePage = () => {
  const { isMobile } = useResponsive()
  const { pathname } = useLocation()
  const cleanPathname = pathname.replace(process.env.PUBLIC_URL, '')
  const isSecondPage = /disruption-trend/.test(cleanPathname)
  return isSecondPage ? (
    <div>
      <Advantage />
      <BackToTop zIndex={99} />
    </div>
  ) : (
    <div>
      <Intro isMobile={isMobile} />
      <Feature />
      <Fund />
      <BackToTop zIndex={99} />
    </div>
  )
}

export default HomePage
