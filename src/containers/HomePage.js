import React, { useState } from 'react'
import { StickyContainer, Sticky } from 'react-sticky';

import useResponsive from '../contexts/mediaQuery/useResponsive'

import Intro from './Intro'
import Sections from './Sections/Loadable'
import Fund from './Fund/Loadable'
import BackToTop from './BackToTop'

const HomePage = () => {
  const { isMobile, isLaptop } = useResponsive()
  const [loaded, setLoaded] = useState(0)
  const handleLoaded = () => setLoaded(l => l + 1)
  return (
    <StickyContainer>
      <Intro isLaptop={isLaptop} isMobile={isMobile} onLoad={handleLoaded} />
      {loaded > 0 && <Sections isMobile={isMobile} onLoad={handleLoaded} />}
      {loaded > 1 && <Fund noSticky onLoad={handleLoaded} />}
      {loaded > 2 && (
        <Sticky bottomOffset={-880}>
          {({
            isSticky,
            distanceFromBottom,
          }) => (
            <BackToTop isSticky={isSticky} distanceFromBottom={distanceFromBottom} zIndex={999} />
          )}
        </Sticky>
      )}
    </StickyContainer>
  )
}

export default HomePage
