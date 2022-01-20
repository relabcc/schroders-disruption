import React from 'react'
import SVG from './SVG'

const Arrow = (props) => {
  return (
    <SVG viewBox="0 0 29.184 28.906" {...props}>
      <g>
        <g transform="translate(16.582)">
          <path d="M25,2.693a11.925,11.925,0,0,1,0,23.52v2.693A14.589,14.589,0,0,0,25,0Z" transform="translate(-25)" fill="currentColor" />
        </g>
        <g  >
          <path d="M12.6,28.906V26.213a11.925,11.925,0,0,1,0-23.52V0a14.589,14.589,0,0,0,0,28.906Z" fill="currentColor" />
        </g>
      </g>
      <g transform="translate(7.349 10.964)">
        <path d="M18.615,25.385,11.08,18.148l1.38-1.433,6.135,5.9,6.168-6.082,1.393,1.419Z" transform="translate(-11.08 -16.53)" fill="currentColor" />
      </g>
    </SVG>
  )
}

export default Arrow
