import React from 'react'
import isString from 'lodash/isString'
// import loadable from '@loadable/component'

import Box from '../../../components/Box'
import Flex from '../../../components/Flex'
import Text from '../../../components/Text'
import Image from '../../../components/Image'
import Source from '../../../components/Source'
import { responsive } from '../../../components/ThemeProvider/theme'
import Container from '../../../components/Container'
// import LottieAnima from '../../../components/LottieAnima'

import useResponsive from '../../../contexts/mediaQuery/useResponsive'

import chart_2_3 from './2-3.svg'
import chart_2_3_desk from './2-3-desk.svg'

import Keywords from '../Keywords'
import Chart1 from './Chart1'

const advs = [
  {
    title: '善變　才能領先新多頭',
    subTitle: '多主題高速成長時代來臨',
    desc: '技術破壞性爆發，市場從單一趨勢加速轉向多主題成長。',
    isFlex: true,
    chart: <Chart1 />,
    desk_chart: <Chart1 />,
    source: 'Lipper, USD, MSCI IT 1994/12/31~1999/12/31, MSCI BRIC 2002/12/31~2007/12/31, Bloomberg Brent 2001/12/31~2007/12/31, NYSE FANG+ 2015/12/31~2020/12/31, Schroders, March 2021.'
  },
  {
    title: '敢於顛覆　躍升未來新贏家',
    subTitle: '多成長時代 三大潛力關鍵字',
    desc: '找出潛力三大主題「智慧創新、風格生活、環境永續」，尋找顛覆未來新贏家。',
    chart: <Keywords />,
    desk_chart: <Keywords />,
    source: '施羅德投資，2021/12/31。'
  },
  {
    title: '挖掘數據　佈局未來超新星',
    subTitle: '用大數據構築投資策略',
    desc: '深度挖掘多面向數據，監測多種領域，以獨家洞見搜尋投資新星。',
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
          <Container position="relative" pt={responsive('2em', '4.5rem')}>
            <Box position={responsive('raletive', 'absolute')} width={responsive(isFlex ? '52.5%' : 'auto', '32.4%')} zIndex={1}>
              <Text.SubTitle whiteSpace="nowrap" color="purple">{subTitle}</Text.SubTitle>
              <Text textAlign="justify" mt="0.25rem" whiteSpace="pre-wrap" fontSize={responsive('1rem', '1.8rem')}>{desc}</Text>
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
