import React, { useState, useMemo, createRef, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

import Box from './Box'
import Flex from './Flex'
import Image from './Image'
import Text from './Text'
import { responsive } from './ThemeProvider/theme'
import useResponsive from '../contexts/mediaQuery/useResponsive';

const Module = ({ content, logoWidth, leftWidth, bigTitle, bigText, ...props }) => {
  const { isMobile } = useResponsive()
  const refs = useMemo(() => content.map(() => createRef()), [content]);
  const [maxHeight, setMaxHeight] = useState()
  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      let maxH = 0
      for (let entry of entries) {
        if (entry.contentBoxSize) {
          // Firefox implements `contentBoxSize` as a single content rect, rather than an array
          const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
          // console.log(contentBoxSize.blockSize)
          maxH = Math.max(maxH, contentBoxSize.blockSize)
        } else {
          const contentRectH = entry.contentRect.height
          maxH = Math.max(maxH, contentRectH)
        }
      }
      setMaxHeight(maxH)
    });
    refs.forEach(r => resizeObserver.observe(r.current))
    return () => refs.forEach(r => resizeObserver.unobserve(r.current))
  }, [refs])
  return (
    <Flex
      mx={responsive(0, '-2em')}
      mt={responsive('2em', '1.25em')}
      display={responsive('block', 'flex')}
      {...props}
    >
      {content.map(({ src, title, label, text }, k, { length }) => (
        <Flex
          mx={responsive(0, '2em')}
          mt={responsive('1em', '2em')}
          pb={responsive('0.5em', '1em')}
          alignItems="center"
          display={responsive('flex', 'block')}
          width={responsive(1, 1 / length)}
          key={k}
        >
          <Box
            width={logoWidth || (length < 4 ? responsive('6.428em', '50%') : responsive('6.428em', '70%'))}
            px={responsive(0, '1em')}
            mr={responsive('2em', 'auto')}
            mt={title && "1em"}
            mx="auto"
          >
            <Image src={src} />
          </Box>
          <Box display="block" mt={responsive('0', '1em')} width="100%">
            {label && (
              <Flex
                style={{ height: isMobile ? 'auto' : maxHeight }}
                my={responsive('0.375em', '1.5em')}
                alignItems="center"
                justifyContent={responsive('flex-start', 'center')}
              >
                <Text.ModuleTitle
                  ref={refs[k]}
                  whiteSpace="pre-wrap"
                  textAlign={responsive('left', 'center')}
                  fontSize={bigTitle ? responsive('2em', '2.8em') : responsive('1.8em', '2.4em')}
                >{label}</Text.ModuleTitle>
              </Flex>
            )}
            <Flex justifyContent={responsive('flex-start', 'center')}>
              <Text textAlign="left" whiteSpace="pre-wrap">{text}</Text>
            </Flex>
          </Box>
        </Flex>
      ))}
    </Flex>
  )
}

export default Module
