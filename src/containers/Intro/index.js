import React from 'react'

import Container from '../../components/Container'
import Box from '../../components/Box'
import Flex from '../../components/Flex'
import Text from '../../components/Text'

import { responsive } from '../../components/ThemeProvider/theme'
import Video from './Video'

const Intro = ({ onLoad }) => {
  return (
    <Box bg="darkGreen">
      <Container
        pt={responsive('2em', '4em')}
        px={30}
        pb={responsive('2em', '4em')}
        color="white"
      >
        <Flex alignItems="center" flexDirection={responsive('column', 'row')}>
          <Box>
            <Text fontSize={responsive('2em', '2.5em', '2.75em')} fontWeight="900">追求獲利 同時讓世界受益</Text>
            <Text my="1em" fontSize={responsive('1.25em', '1.5em', '1.75em')}>
              投資不僅可追求財富增長，更能對世界發揮影響力。<br />
              我們相信永續投資追求的不僅是獲利，更能讓社會受益。
            </Text>
          </Box>
          <Box width={responsive(1, 1 / 2)} ml={responsive(0, '3rem')}>
            <Video onLoad={onLoad} />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Intro
