import React, { useEffect, useRef } from 'react';

const Video = ({ onLoad = () => {} }) => {
  const ref = useRef()
  useEffect(() => {
    ref.current.appendChild(window.__video)
    let tries = 0
    const init = () => {
      const player = window.__video.querySelector('video')
      if (player) {
        onLoad()
      } else {
        if (tries < 10) {
          setTimeout(init, 200)
          tries += 1
        } else {
          onLoad()
        }
      }
    }
    init()
  }, [])

  return <div ref={ref} />
}

export default Video;
