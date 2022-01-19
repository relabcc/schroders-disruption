import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-scroll'

import Container from '../../components/Container'
import Box from '../../components/Box'
import Flex from '../../components/Flex'
import Text from '../../components/Text'
import Image from '../../components/Image'
import Circle from '../../components/Circle'
import { responsive } from '../../components/ThemeProvider/theme'

import mobile_banner from './mobile_banner.png'
import desk_banner from './desk_banner.png'
import money from './money.png'
import hand from './hand.png'

const base = 10

const move = keyframes`
  25% {
    opacity: 1;
  }
  33.3% {
    opacity: 1;
    transform: translateY(${`${base * 3.8}px`});
  }
  66.6% {
    opacity: 0;
    transform: translateY(${`${base * 5.2}px`});
  }
  100% {
    opacity: 0;
    transform: translateY(${`${base * 8}px scale(0.8)`});
  }
`

const Arrow = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .chevron {
    position: absolute;
    width: ${`${base * 3.5}px`};
    height: ${`${base * 1.25}px`};
    opacity: 0;
    transform: scale(0.3);
    animation: ${move} 3s ease-out infinite;
  }

  .chevron:first-child {
    animation: ${move} 3s ease-out 1s infinite;
  }

  .chevron:nth-child(2) {
    animation: ${move} 3s ease-out 2s infinite;
  }

  .chevron:before,
  .chevron:after {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    background: rgba(255, 255, 255, 0.5);
  }

  .chevron:before {
    left: 0;
    transform: skewY(40deg);
  }

  .chevron:after {
    right: 0;
    transform: skewY(-40deg);
  }
`

const features = [
  {
    icon: money,
    title: '基金三大特色',
    name: 'feature'
  },
  {
    icon: hand,
    title: '掌握顛覆趨勢',
    name: 'advantage'
  },
]

const Banner = ({ url, color }) => (
  <Box
    background={`url(${url}) center no-repeat`}
    backgroundSize={responsive('768px auto', '1710px auto')}
    height={responsive('447px', '700px')}
    bg="lightBlue"
  >
    <Container
      pt={responsive('3.8rem', '10rem')}
      px={15}
      color={color}
      position="relative"
    >
      <Box>
        <Text.Bold fontSize={responsive('3.4rem', '8rem')} lineHeight={1.2}>
          顛覆未來即刻啟動
        </Text.Bold>
        <Arrow>
          <Box className="chevron" />
          <Box className="chevron" />
          <Box className="chevron" />
        </Arrow>
        <Flex justifyContent="space-between" mt="11rem">
          {features.map(({ icon, title, name }, k) => (
            <Box.Relative
              as={(p) => <Link smooth {...p} />}
              py="0.625rem"
              ml="2.25rem"
              pl="1.5rem"
              width="45%"
              textAlign="center"
              border="1px solid"
              borderColor="prussianblue"
              borderRadius="1.5em"
              fontSize="1.5rem"
              fontWeight="bold"
              bg="lightBlue"
              to={name}
              key={k}
            >
              <Box.Absolute width="4.5rem" top="50%" left="0" transform="translate(-40%, -50%)">
                <Circle border="1px solid" borderColor="prussianblue" bg="lightBlue">
                  <Image src={icon} />
                </Circle>
              </Box.Absolute>
              {title}
            </Box.Relative>
          ))}
        </Flex>
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
