import React from 'react'
import SVG from './SVG'

const Arrow = (props) => {
  return (
    <SVG viewBox="0 0 16.4 16.45" {...props}>
      <g id="圖文">
        <path d="M.24,8.23a8,8,0,0,0,7.21,8v-.93a7.08,7.08,0,0,1,0-14.07V.26A8,8,0,0,0,.24,8.23ZM9,.26v.93A7.08,7.08,0,0,1,9,15.26v.93A8,8,0,0,0,9,.26Z" fill="#002a5e" stroke="#002a5e" stroke-miterlimit="10" stroke-width="0.48" />
        <polyline points="6.32 11.36 10.38 8.07 6.32 4.78" fill="none" stroke="#002a5e" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.96" />
      </g>
    </SVG>
  )
}

export default Arrow
