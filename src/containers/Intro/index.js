import React from 'react'

import Container from '../../components/Container'
import Box from '../../components/Box'
import Flex from '../../components/Flex'
import Text from '../../components/Text'
import FadeSlideshow from '../../components/FadeSlideshow'
import { responsive } from '../../components/ThemeProvider/theme'

import mobile_banner from './mobile_banner.png'
import desk_banner from './desk_banner.png'

const Banner = ({ url, color }) => (
  <Box
    background={`url(${url}) center no-repeat`}
    backgroundSize={responsive('768px auto', '1710px auto')}
    height={responsive('336px', '700px')}
    bg="lightBlue"
  >
    <Container
      pt={responsive('4rem', '10rem')}
      px={30}
      color={color}
      position="relative"
    >
      <Box textAlign="center">
        <Text.Bold whiteSpace={responsive('pre-wrap', 'normal')} fontSize={responsive('4.8rem', '8rem')} lineHeight={1.2}>
          {`顛覆創新\n投資未來`}
        </Text.Bold>
        <Text.Bold mt={responsive('11.4rem', '33rem')} lineHeight={19/14} fontSize={responsive('1.9em', '6rem')}>
          施羅德環球顛覆未來股票
        </Text.Bold>
      </Box>
      <Box width={responsive(1, 1 / 2)} ml={responsive(0, '3rem')}>
      </Box>
    </Container>
  </Box>
)

const Intro = ({ isMobile }) => {
  return (
    <Banner url={isMobile ? mobile_banner : desk_banner} color="prussianBlue" />
  )
}

export default Intro
