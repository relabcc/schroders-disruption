import React, { forwardRef, useEffect, useMemo } from 'react';
import stickybits from 'stickybits'
import { nanoid } from 'nanoid/non-secure'

import Box from './Box'

const Sticky = forwardRef(({
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
}, ref) => {
  const className = useMemo(() => `sticky-${nanoid()}`, [])
  useEffect(() => {
    const sticky = stickybits(`.${className}`, {
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
    window[className] = sticky
    if (ref) {
      ref.current = sticky
    }

    return function cleanup() {
      if (window[className]) {
        window[className].cleanup()
        delete window[className]
      }
    }
  }, [])
  return (
    <Box className={className} left={0} right={0}>
      {children}
    </Box>
  );
});

export default Sticky;
