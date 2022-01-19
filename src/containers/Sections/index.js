import React from 'react'
import { Element } from 'react-scroll'

import Box from '../../components/Box'

import Feature from './Feature'
import Advantage from './Advantage'

const Sections = () => {
  return (
    <Box id="fund-head">
      <Element name="feature" className="element">
        <Feature />
      </Element>
      <Element name="advantage" className="element">
        <Advantage />
      </Element>
    </Box>
  )
}

export default Sections
