import React, { useEffect, useMemo } from 'react';
import stickybits from 'stickybits'
import shortid from 'shortid'

import Box from './Box'

const Sticky = ({
  children,
  useStickyClasses,
  verticalPosition = 'top',
  scrollEl,
  stickyBitStickyOffset,
  noStyles,
  parentClass,
  stickyClass,
  stuckClass,
  useFixed,
  useGetBoundingClientRect,
}) => {
  const className = useMemo(() => `sticky-${shortid()}`, [])
  useEffect(() => {
    window[className] = stickybits(`.${className}`, {
      useStickyClasses,
      verticalPosition,
      scrollEl,
      stickyBitStickyOffset,
      noStyles,
      parentClass,
      stickyClass,
      stuckClass,
      useFixed,
      useGetBoundingClientRect,
    });

    return function cleanup() {
      if (window[className]) {
        window[className].cleanup()
        delete window[className]
      }
    }
  }, [])
  return (
    <Box className={className} zOrder={2} left={0} right={0}>
      {children}
    </Box>
  );
};

export default Sticky;
