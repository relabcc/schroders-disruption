import React, { useState } from 'react'

import useResponsive from '../contexts/mediaQuery/useResponsive'

import Intro from './Intro'
import Sections from './Sections/Loadable'
import Fund from './Fund/Loadable'
import BackToTop from './BackToTop/Loadable'

const HomePage = () => {
  const { isMobile, isLaptop } = useResponsive()
  const [loaded, setLoaded] = useState(0)
  const handleLoaded = () => setLoaded(l => l + 1)
  return (
    <>
      <Intro isLaptop={isLaptop} isMobile={isMobile} onLoad={handleLoaded} />
      {loaded > 0 && <Sections isMobile={isMobile} onLoad={handleLoaded} />}
      {loaded > 1 && <Fund noSticky onLoad={handleLoaded} />}
      {loaded > 2 && <BackToTop zIndex={999} />}
    </>
  )
}

export default HomePage
