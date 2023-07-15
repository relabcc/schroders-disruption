import React from 'react'
import isString from 'lodash/isString'
// import loadable from '@loadable/component'

import Box from '../../../components/Box'
import Flex from '../../../components/Flex'
import Text from '../../../components/Text'
import Image from '../../../components/Image'
import Source from '../../../components/Source'
import { Media, responsive } from '../../../components/ThemeProvider/theme'
import Container from '../../../components/Container'
// import LottieAnima from '../../../components/LottieAnima'

// import useResponsive from '../../../contexts/mediaQuery/useResponsive'
import Chart23 from './Chart23'
import Chart23d from './Chart23d'
import bg_2_2 from './pic-bg.png'

import Keywords from '../Keywords'
import Chart1 from './Chart1'

const advs = [
  {
    title: '善變　才能掌握新多頭契機',
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
    desc: '找出潛力三大主題「創新翻轉、生活新風格、環境永續」，尋找顛覆未來新贏家。',
    chart: <Keywords />,
    desk_chart: <Keywords />,
    bgImg: bg_2_2,
    source: '施羅德投資，2021/12/31。'
  },
  {
    title: '挖掘數據　佈局未來超新星',
    subTitle: '用大數據構築投資策略',
    desc: '深度挖掘多面向數據，監測多種領域，以獨家洞見搜尋投資新星。',
    chart: <Chart23 />,
    desk_chart: <Chart23d />,
    source: '施羅德投資，2021/12/31。'
  },
]

const Advantage = () => {
  // const { isMobile } = useResponsive()
  return (
    <>
      {advs.map(({ title, chart, desk_chart, source, isFlex, subTitle, desc, bgImg }, i) => (
        <Box overflow="hidden" key={i} mt="2em">
          <Box.BgTitle>
            {title}
          </Box.BgTitle>
          <Container position="relative" pt={responsive('2em', '4.5em')}>
            <Box position={responsive('raletive', 'absolute')} width={responsive(isFlex ? '52.5%' : 'auto', '32.4%')} zIndex={1}>
              <Text.SubTitle whiteSpace="nowrap" color="purple">{subTitle}</Text.SubTitle>
              <Text textAlign="justify" mt={responsive('0.6em', '2em')} whiteSpace="pre-wrap">{desc}</Text>
            </Box>
            <Box>
              {isString(chart) ? (
                <>
                  <Media at="mobile"><Image src={chart} /></Media>
                  <Media greaterThan="mobile"><Image src={desk_chart} /></Media>
                </>
              ) : (
                <>
                  <Media at="mobile">{chart}</Media>
                  <Media greaterThan="mobile">{desk_chart}</Media>
                </>
              )}
            </Box>
          </Container>
          <Flex position="relative" alignItems="center" bg="bgGray" height={responsive('auto', '10.4em')}>
            <Source width="100%">{source}</Source>
          </Flex>
        </Box>
      ))}
    </>
  )
}

export default Advantage
