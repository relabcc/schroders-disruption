import React, { useEffect, useState } from 'react'
import isString from 'lodash/isString'

import Box from '../../components/Box'
import Flex from '../../components/Flex'
import Text from '../../components/Text'
import Title from '../../components/Title'
import Image from '../../components/Image'
import Source from '../../components/Source'
import LottieAnima from '../../components/LottieAnima'
import BackgroundImage from '../../components/BackgroundImage'
import { responsive } from '../../components/ThemeProvider/theme'

import chart_1_3 from './1-3.png'
import Keywords from './Keywords'

const secs = [
  {
    title: '善變　才能領先新多頭',
    subTitle: '顛覆性創新遍地開展\n多成長時代加速來臨',
    desc: '技術破壞性爆發，市場從單一趨勢加速轉向多主題成長。施羅德洞析巨量數據，搶佔多成長先機。',
    Comp: Flex.Relative,
    isFlex: true,
    chart: (
      <Box mt="-28%">
        <Box width="100%">
          <LottieAnima src={`${process.env.PUBLIC_URL}/chart-1.json`} ratio={352 / 300} />
        </Box>
      </Box>
    ),
    source: 'Lipper, USD, MSCI IT 1994/12/31~1999/12/31, MSCI BRIC 2002/12/31~2007/12/31, Bloomberg Brent 2001/12/31~2007/12/31, NYSE FANG+ 2015/12/31~2020/12/31, Schroders, March 2021.'
  },
  {
    title: '敢於顛覆　創造新贏家策略',
    subTitle: '多成長時代　三大潛力關鍵字',
    desc: '歸納三大領域「智慧創新、風格生活、環境永續」，包含顛覆創新的獨角獸企業、虛實多面向的新消費力及能源轉型低碳科技的投資機會。',
    chart: <Keywords />,
    source: '施羅德投資，2021/12/31。'

  },
  {
    title: '挖掘數據　佈局未來超新星',
    subTitle: '用大數據構築投資策略',
    desc: '技術破壞性爆發，市場從單一趨勢加速轉向多主題成長。施羅德洞析巨量數據，搶佔多成長先機。',
    chart: chart_1_3,
    source: '施羅德投資，2021/12/31。'
  },
]

const Sections = () => {
  return (
    <Box id="fund-head" pt={responsive(0, '2em')}>
      {secs.map(({ title, chart, source, isFlex, subTitle, desc }, i) => (
        <Box key={i}>
          <Box.BgTitle titleColor="white">
            {title}
          </Box.BgTitle>
          <Box pt="2rem" px="1em">
            <Box width={isFlex ? 5 / 9 : 'auto'}>
              <Text.SubTitle whiteSpace="pre-wrap" color="purple">{subTitle}</Text.SubTitle>
              <Text mt="1rem" fontSize="1.5rem">{desc}</Text>
            </Box>
            <Box>{isString(chart) ? <Image src={chart} /> : chart}</Box>
          </Box>
          <Source>{source}</Source>
        </Box>
      ))}
    </Box>
  )
}

export default Sections
