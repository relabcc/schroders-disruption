import React, { useEffect, useState } from 'react'

import Box from '../../components/Box'
import Flex from '../../components/Flex'
import { responsive } from '../../components/ThemeProvider/theme'

import GSG from './GSG/Loadable'
import Feature from './Feature/Loadable'
import SustainEx from './SustainEx/Loadable'
import Title from '../../components/Title'
import LottieAnima from '../../components/LottieAnima'
import BackgroundImage from '../../components/BackgroundImage'
import Keywords from './Keywords'

const secs = [
  {
    name: '善變　才能領先新多頭',
    Comp: Flex.Relative,
    chart: (
      <Box ml={`-${5 / 4 * 50}%`} mr={`-${5 / 4 * 50}%`}>
        <Box width="100%" pr="27%">
          <LottieAnima src={`${process.env.PUBLIC_URL}/chart-1.json`} ratio={372 / 340} />
        </Box>
      </Box>
    ),
  },
  {
    name: '敢於顛覆　創造新贏家策略',
    chart: <Keywords />,
  },
  {
    name: '挖掘數據　佈局未來超新星',

  },
]

const Sections = () => {
  return (
    <Box id="fund-head" pt={responsive(0, '2em')}>
      {secs.map(({ Comp = Box, name, chart }, i) => (
        <Box key={i}>
          <Box.BgTitle titleColor="white">
            {name}
          </Box.BgTitle>
          <Comp>
            <Box width={Comp ? responsive(5 / 9, '100%') : 'auto'}>文字</Box>
            <Box width={Comp ? responsive(4 / 9, '100%') : 'auto'}>{chart ?? '動態or圖'}</Box>
          </Comp>
        </Box>
      ))}
    </Box>
  )
}

export default Sections
