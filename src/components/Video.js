import React, { PureComponent } from 'react';
import { Player, ControlBar, BigPlayButton, LoadingSpinner } from 'video-react';
import 'video-react/dist/video-react.css';
import styled from 'styled-components';
import last from 'lodash/last'

import Flex from './Flex'
import Box from './Box'

import { responsive } from './ThemeProvider/theme'
import useResponsive from '../contexts/mediaQuery/useResponsive';

const StyledBox = styled(Box)`
.video-react .video-react-big-play-button {
  width: 1.5em;
  border-radius: 50%;
}
.video-react .video-react-big-play-button.video-react-big-play-button-center {
  margin-left: -1em;
}
`

const player = {
  __html: `<script id="bynder-widgets-js" data-account-url="mybrand.schroders.com" data-language="en" src="https://d8ejoa1fys2rk.cloudfront.net/bynder-embed/latest/bynder-embed.js"></script>`
}

const Video = (props) => {
    // if (this.player) {
    //   if (window.gaTrackClick) {
    //     const { activeArticle } = this.props
    //     const { currentTime } = this.player.getState().player
    //     const times = [5, 10, 15, 30, 60, 120]
    //     const sec = times.findIndex(t => currentTime < t)
    //     let msg
    //     if (sec === -1) {
    //       msg = `大於${last(times)}秒`
    //     } else if (sec === 0) {
    //       msg = `小於${times[0]}秒`
    //     } else {
    //       msg = `${times[sec - 1]}~${times[sec]}秒`
    //     }
    //     window.gaTrackClick(`影片停止_${activeArticle + 1}_${msg}`)
    //   }
    // }
    const { isMobile } = useResponsive()
    return (
      <StyledBox position="relative">
        <div
          data-bynder-widget="video-item"
          data-media-id="802B2B73-DFBD-4434-A22DDFED7EA85B7A"
          data-width=""
          data-autoplay="true"
          dangerouslySetInnerHTML={player}
        ></div>
      </StyledBox>
    )
  }




export default Video;
