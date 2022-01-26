import React from 'react'

import Box from './Box'
import Flex from './Flex'
import Text from './Text'
import Link from './Link'
import Image from './Image'
import Button from './Button'
import CircleArrow from './CircleArrow'
import { responsive } from './ThemeProvider/theme'

const Title = ({ src, step, title, desc, titleColor, titleFontSize, href, to, button, hasDirection, ...props }) => {
  return (
    <Box py={responsive('3rem', '7rem')} px="1.6rem" {...props}>
      <Flex alignItems="center" flexDirection={hasDirection && responsive('row', 'column')}>
        {src && (
          <Box width={responsive('5.5rem', '17.8rem')} >
            <Image src={src} />
          </Box>
        )}
        <Box mt={hasDirection && responsive(0, '3.2rem')} ml={src && responsive('0.86em', hasDirection ? 0 : '3.1rem')} >
          <Flex
            fontWeight="bold"
            flexDirection={responsive('column', 'row')}
            alignItems={responsive('flex-start', 'center')}
          >
            {step && <Text.SubTitle color="darkBlue">特色{step}</Text.SubTitle>}
            <Text.SubTitle lineHeight="1.3" ml={step && responsive(0, '0.5em')} titleFontSize={titleFontSize} color={titleColor || "purple"} whiteSpace="pre-wrap">{title}</Text.SubTitle>
          </Flex>
          {desc && <Text mt={hasDirection && responsive(0, '0.8rem')} whiteSpace={responsive('nowrap', 'pre-wrap')}>{desc}</Text>}
          {button && (
            <Button.Outline width="100%" mt="0.6rem" as={Link} href={href} to={to}>
              <Flex justifyContent="center" alignItems="center">
                <Text fontSize="1.6rem">{button}</Text>
                <CircleArrow width="1.8rem" ml="0.5rem" />
              </Flex>
            </Button.Outline>
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export default Title
