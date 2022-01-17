import React from 'react'

import Container from '../../components/Container'
import Box from '../../components/Box'
import Flex from '../../components/Flex'
import Text from '../../components/Text'

import { responsive } from '../../components/ThemeProvider/theme'
import Video from './Video'
import mobile_banner from './mobile_banner.png'

const Intro = () => {
  return (
    <Box
      background={`url(${mobile_banner}) center no-repeat`}
      backgroundSize="768px auto"
      height="336px"
    >
      <Container
        pt={responsive('4rem', '4em')}
        px={30}
        color="prussianBlue"
        position="relative"
      >
        <Box textAlign="center">
          <Text.Bold fontSize={responsive('4.8rem', '3.5em', '4em')} lineHeight={1.2}>
            顛覆創新<br />投資未來
          </Text.Bold>
          <Text.Bold mt="11.4rem" lineHeight={19/14} fontSize={responsive('1.9em', '2.25em', '2.25em')}>
            施羅德環球顛覆未來股票
          </Text.Bold>
        </Box>
        <Box width={responsive(1, 1 / 2)} ml={responsive(0, '3rem')}>
        </Box>
      </Container>
    </Box>
  )
}

export default Intro
