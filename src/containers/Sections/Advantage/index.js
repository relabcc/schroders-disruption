import React from 'react'
import isString from 'lodash/isString'
import loadable from '@loadable/component'

import Box from '../../../components/Box'
import Flex from '../../../components/Flex'
import Text from '../../../components/Text'
import Image from '../../../components/Image'
import Source from '../../../components/Source'
import { responsive } from '../../../components/ThemeProvider/theme'
import Container from '../../../components/Container'
import LottieAnima from '../../../components/LottieAnima'

import useResponsive from '../../../contexts/mediaQuery/useResponsive'

import chart_2_3 from './2-3.svg'
import chart_2_3_desk from './chart-2-3-desk.svg'

import Keywords from '../Keywords'

const advs = [
  {
    title: '善變　才能領先新多頭',
    subTitle: '多主題高速成長時代來臨',
    desc: '技術破壞性爆發，市場從單一趨勢加速轉向多主題成長。',
    isFlex: true,
    chart: (
      <Box mt={responsive('-22%', '-25%')} mr={responsive("-1.5em", 0)} overflowY="hidden">
        <Box width="100%">
          <LottieAnima src={`${process.env.PUBLIC_URL}/chart-1.json`} ratio={352 / 300} />
        </Box>
      </Box>
    ),
    source: 'Lipper, USD, MSCI IT 1994/12/31~1999/12/31, MSCI BRIC 2002/12/31~2007/12/31, Bloomberg Brent 2001/12/31~2007/12/31, NYSE FANG+ 2015/12/31~2020/12/31, Schroders, March 2021.'
  },
  {
    title: '敢於顛覆　躍升未來新贏家',
    subTitle: '多成長時代 三大潛力關鍵字',
    desc: '歸納三大領域「智慧創新、風格生活、環境永續」，包含顛覆創新的獨角獸企業、虛實多面向的新消費力及能源轉型低碳科技的投資機會。',
    chart: <Keywords />,
    source: '施羅德投資，2021/12/31。'
  },
  {
    title: '挖掘數據　佈局未來超新星',
    subTitle: '用大數據構築投資策略',
    desc: '深度挖掘多面向數據，動態監測多樣投資主題領域，結合資深產業專家洞見，建立強健穩固的投資策略。',
    chart: chart_2_3,
    desk_chart: chart_2_3_desk,
    source: '施羅德投資，2021/12/31。'
  },
]

const Advantage = () => {
  const { isMobile } = useResponsive()
  return (
    <div>
      {advs.map(({ title, chart, desk_chart, source, isFlex, subTitle, desc }, i) => (
        <Box overflow="hidden" key={i}>
          <Box.BgTitle>
            {title}
          </Box.BgTitle>
          <Container pt={responsive('2em', '4.5rem')}>
            <Box position={responsive('raletive', 'absolute')} width={responsive(isFlex ? '55%' : 'auto', '40.8%')}>
              <Text.SubTitle whiteSpace="pre-wrap" color="purple">{subTitle}</Text.SubTitle>
              <Text textAlign="justify" mt="1rem" whiteSpace="pre-wrap" fontSize={responsive('1rem', '1.8rem')}>{desc}</Text>
            </Box>
            <Box>{isString(chart) ? <Image src={isMobile ? chart : desk_chart} /> : isMobile ? chart : desk_chart}</Box>
          </Container>
          <Flex alignItems="center" bg="bgGray" height={responsive('auto', '10.4rem')}>
            <Source width="100%">{source}</Source>
          </Flex>
        </Box>
      ))}
    </div>
  )
}

export default Advantage
