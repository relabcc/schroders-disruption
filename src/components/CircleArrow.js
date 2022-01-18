import React from 'react'
import SVG from './SVG'

const Arrow = (props) => {
  return (
    <SVG viewBox="0 0 18 18" {...props}>
      <g>
        <path d="M.74,9a8.3,8.3,0,0,0,7.48,8.26v-1a7.35,7.35,0,0,1,0-14.6v-1A8.3,8.3,0,0,0,.74,9Zm9-8.26v1a7.35,7.35,0,0,1,0,14.6v1A8.3,8.3,0,0,0,9.78.74Z" fill="#002a5e" stroke="#002a5e" stroke-miterlimit="10" stroke-width="0.5" />
        <polyline points="7.05 12.25 11.26 8.84 7.05 5.42" fill="none" stroke="#002a5e" stroke-linecap="round" stroke-linejoin="round" />
      </g>
    </SVG>
  )
}

export default Arrow
