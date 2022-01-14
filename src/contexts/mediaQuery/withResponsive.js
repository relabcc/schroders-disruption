import React from 'react'
import MediaContext from './mediaContext'
import { responsiveIndex } from '../../components/ThemeProvider/theme';

export default (WrappedComp) => props => (
  <MediaContext.Consumer>
    {q => (
      <WrappedComp
        {...props}
        isMobile={!q[responsiveIndex[0] - 1]}
        isLaptop={!q[responsiveIndex[1] - 1]}
      />
    )}
  </MediaContext.Consumer>
);
