import React from 'react'
// import styled, { keyframes } from 'styled-components'
// import { Link } from 'react-scroll'

import Container from '../../components/Container'
import Box from '../../components/Box'
import Text from '../../components/Text'
import { Media, responsive } from '../../components/ThemeProvider/theme'

import mobile_banner from './mobile_banner.png'
import desk_banner from './desk_banner.png'
// import money from './money.png'
// import hand from './hand.png'

// const base = 10

// const move = keyframes`
//   25% {
//     opacity: 1;
//   }
//   33.3% {
//     opacity: 1;
//     transform: translateY(${`${base * 3.8}px`});
//   }
//   66.6% {
//     opacity: 0;
//     transform: translateY(${`${base * 5.2}px`});
//   }
//   100% {
//     opacity: 0;
//     transform: translateY(${`${base * 8}px scale(0.8)`});
//   }
// `

// const Arrow = styled(Box)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   .chevron {
//     position: absolute;
//     width: ${`${base * 3.5}px`};
//     height: ${`${base * 1.25}px`};
//     opacity: 0;
//     transform: scale(0.3);
//     animation: ${move} 3s ease-out infinite;
//   }

//   .chevron:first-child {
//     animation: ${move} 3s ease-out 1s infinite;
//   }

//   .chevron:nth-child(2) {
//     animation: ${move} 3s ease-out 2s infinite;
//   }

//   .chevron:before,
//   .chevron:after {
//     content: '';
//     position: absolute;
//     top: 0;
//     height: 100%;
//     width: 50%;
//     background: rgba(255, 255, 255, 0.5);
//   }

//   .chevron:before {
//     left: 0;
//     transform: skewY(40deg);
//   }

//   .chevron:after {
//     right: 0;
//     transform: skewY(-40deg);
//   }
// `

// const features = [
//   {
//     icon: money,
//     title: '基金三大特色',
//     name: 'feature'
//   },
//   {
//     icon: hand,
//     title: '掌握顛覆趨勢',
//     name: 'advantage'
//   },
// ]

const Banner = ({ url, color }) => {
  return (
    <Box
      backgroundImage={url}
      backgroundPosition="center"
      backgroundRepeat="center"
      backgroundSize={responsive('768px auto', '2560px auto')}
      height={responsive('360px', '650px')}
      bgColor="lightBlue"
    >
      <Container
        pt={responsive('6.7rem', '13rem')}
        px={15}
        color={color}
        position="relative"
      >
        <Box>
          <Text.Bold textAlign="center" fontSize={responsive('3.4rem', '6rem')} lineHeight={1.2}>
            顛覆未來 即刻啟動
          </Text.Bold>
          {/* <Arrow>
            <Box className="chevron" />
            <Box className="chevron" />
            <Box className="chevron" />
          </Arrow> */}
          {/* <Flex justifyContent={responsive('space-between', 'center')} mt={responsive('11rem', '10rem')}>
            {features.map(({ icon, title, name }, k) => (
              <Box.Relative
                as={(p) => <Link smooth {...p} />}
                py={responsive('0.625rem', '1.3rem')}
                ml={responsive('2.25rem', '4.7rem')}
                mr={!k && responsive(0, '3.2rem')}
                pl={responsive('1.25rem', '3rem')}
                width={responsive('40%', '27.5rem')}
                textAlign="center"
                border={responsive('1px solid', '2px solid')}
                borderColor="prussianblue"
                borderRadius="1.5em"
                fontSize={responsive("1.5rem", '3.2rem')}
                fontWeight="bold"
                bg="rgba(255,255,255,0.6)"
                to={name}
                key={k}
              >
                <Box.Absolute width={responsive('4.5rem', '9.4rem')} top="50%" left="0" transform="translate(-50%, -50%)">
                  <Circle border={responsive('1px solid', '2px solid')} borderColor="prussianblue" bg="lightBlue">
                    <Box width={responsive('2.6rem', '5.5rem')}>
                      <Image src={icon} />
                    </Box>
                  </Circle>
                </Box.Absolute>
                {title}
              </Box.Relative>
            ))}
          </Flex> */}
        </Box>
      </Container>
    </Box>
  )
}

const Intro = () => {
  return (
    <Banner url={responsive(mobile_banner, desk_banner).map(url => url && `url(${url})`)} color="prussianBlue" />
  )
}

export default Intro
