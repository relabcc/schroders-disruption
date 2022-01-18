import React, { useEffect, useState } from 'react'

import Box from '../../components/Box'
import Flex from '../../components/Flex'
import Source from '../../components/Source'
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
    source: 'Lipper, USD, MSCI IT 1994/12/31~1999/12/31, MSCI BRIC 2002/12/31~2007/12/31, Bloomberg Brent 2001/12/31~2007/12/31, NYSE FANG+ 2015/12/31~2020/12/31, Schroders, March 2021.'
  },
  {
    name: '敢於顛覆　創造新贏家策略',
    chart: <Keywords />,
    source: '施羅德投資，2021/12/31。'

  },
  {
    name: '挖掘數據　佈局未來超新星',
    source: '施羅德投資，2021/12/31。'

  },
]

const Sections = () => {
  return (
    <Box id="fund-head" pt={responsive(0, '2em')}>
      {secs.map(({ Comp = Box, name, chart, source }, i) => (
        <Box key={i}>
          <Box.BgTitle titleColor="white">
            {name}
          </Box.BgTitle>
          <Comp>
            <Box width={Comp ? responsive(5 / 9, '100%') : 'auto'}>文字</Box>
            <Box width={Comp ? responsive(4 / 9, '100%') : 'auto'}>{chart ?? '動態or圖'}</Box>
          </Comp>
          <Source>{source}</Source>
        </Box>
      ))}
    </Box>
  )
}

export default Sections
