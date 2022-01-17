import React, { useEffect, useState } from 'react'

import Box from '../../components/Box'
import Flex from '../../components/Flex'
import { responsive } from '../../components/ThemeProvider/theme'

import GSG from './GSG/Loadable'
import Feature from './Feature/Loadable'
import SustainEx from './SustainEx/Loadable'
import Title from '../../components/Title'

const secs = [
  {
    name: '善變　才能領先新多頭',
    Comp: Flex
  },
  {
    name: '敢於顛覆　創造新贏家策略',

  },
  {
    name: '挖掘數據　佈局未來超新星',

  },
]

const Sections = () => {
  return (
    <Box id="fund-head" pt={responsive(0, '2em')}>
      {secs.map(({ Comp = Box, name }, i) => (
        <Box key={i}>
          <Box.BgTitle titleColor="white">
            {name}
          </Box.BgTitle>
          <Comp>
            <Box width={Comp ? responsive(5 / 9, '100%') : 'auto'}>文字</Box>
            <Box width={Comp ? responsive(4 / 9, '100%') : 'auto'}>動態or圖</Box>
          </Comp>
        </Box>
      ))}
    </Box>
  )
}

export default Sections
