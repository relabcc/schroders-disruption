import React, { useEffect } from 'react'
import Container from '../../../components/Container'
import Box from '../../../components/Box'
import Title from '../../../components/Title'
import Image from '../../../components/Image'
import Text from '../../../components/Text'
import { responsive } from '../../../components/ThemeProvider/theme'

import useResponsive from '../../../contexts/mediaQuery/useResponsive'

import photo1 from './3-1.png'
import photo2 from './3-2.png'
import mobile_photo2 from './mobile-3-2.png'

const photo = [
  {
    src: photo1,
    mobile_src: photo1,
    // width: responsive('100%', '75%')
  },
  {
    src: photo2,
    mobile_src: mobile_photo2,
    // width: responsive('100%', '75%')
  }
]

const SustainEx = ({ onLoad }) => {
  const { isMobile } = useResponsive()
  useEffect(() => onLoad(), [])

  return (
    <Box>
      <Title
        titleFontSize={responsive('2.4rem', '3.6rem')}
        mb="2rem"
        titleColor="white"
        py={responsive('5rem', '4.75rem')}
        title="獨家量化分析工具－SustainEx"
        bg="darkGreen"
      />
      <Container>
        <Text.Desc>以量化來評估企業在各個面向對外部性的影響，透過SustainEx模組分析並給予永續評分。作為投資團隊管理投資組合的重要依據之一。</Text.Desc>
        {photo.map((d, i) => (
          <Box mx="auto" width={responsive('100%', '75%')} mt={responsive('1em', '2em')} key={i}>
            <Image src={isMobile ? d.mobile_src : d.src} />
          </Box>
        ))}
      </Container>
    </Box>
  )
}

export default SustainEx
