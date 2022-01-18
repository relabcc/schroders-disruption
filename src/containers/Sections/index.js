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

import useResponsive from '../../contexts/mediaQuery/useResponsive'

import Keywords from './Keywords'
import chart_1_3 from './1-3.png'
import chart_2_3 from './2-3.png'
import bank from './bank.png'
import chart from './chart.png'
import global from './global.png'
import data from './data.png'

const secs = [
  {
    title: '善變　才能領先新多頭',
    subTitle: '顛覆性創新遍地開展\n多成長時代加速來臨',
    desc: '技術破壞性爆發，市場從單一趨勢加速轉向多主題成長。\n施羅德洞析巨量數據，搶佔多成長先機。',
    Comp: Flex.Relative,
    isFlex: true,
    chart: (
      <Box mt={responsive('-32.5%', '-25%')} mr={responsive("-1.5em", 0)}>
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

const futures = [
  {
    title: '領先佈局\n顛覆未來新主題',
    shortTitle: '顛覆未來新主題',
    subTitle: '精選未來性投資主題',
    desc: '放眼全球 投資未來性產業',
    src: chart,
    text: '挖掘巨量數據下的洞見，聚焦未來投資性主題，為您準備最完善的投資組合。',
    chart: '',
    source: '施羅德投信整理提供，2021/12/31。',
    detail: (
      <Title
        src={bank}
        title={`深入瞭解\n市場矚目的技術新星`}
        bg="brightBlue"
        titleColor="prussianBlue"
        button="查看資產配置"
      />
    )
  },
  {
    title: '聚焦顛覆新贏家',
    subTitle: '關注產業前瞻技術\n精選顛覆性創新的超新星',
    desc: '關注創新獨角獸',
    src: global,
    text: '挖掘潛力新星，聚焦顛覆性獨角獸企業。',
    chart: '',
    source: 'Lipper, 美元計價，統計過去兩年至 2021/12/31。MSCI AC World 指數。iShares megatrends ETF and Vaneck ETF。 個股僅作舉例說明，不代表任何金融商品之推介或投資建議，個股績效，不代表未來走勢或基金績效。'
  },
  {
    title: '產業研究 x 大數據',
    subTitle: '集結全球跨領域專家\n提供值得信賴的深度分析',
    desc: '六大優勢 搶佔未來契機',
    src: data,
    text: '不僅擁有超過百位跨領域專家，更有私募股權創投專門研究未上市公司之非公開資訊，掌握即時第一手資訊，精準掌握多元消息。',
    chart: chart_2_3,
    source: '施羅德投信整理提供，2021/12/31。'
  },
]


const Sections = () => {
  const { isMobile } = useResponsive()
  return (
    <Box id="fund-head" pt={responsive(0, '2em')}>
      {secs.map(({ title, chart, source, isFlex, subTitle, desc }, i) => (
        <Box key={i}>
          <Box.BgTitle titleColor="white">
            {title}
          </Box.BgTitle>
          <Flex mx="auto" maxWidth={responsive('48rem', '114rem')} px={responsive('1.6rem', '2rem')} pt={responsive('2em', '4.5rem')}>
            <Box width={responsive('100%', '84.25%')} pr={responsive(0, "8.3rem")}>
              <Box width={isFlex ? responsive('55%', '47%') : 'auto'}>
                <Text.SubTitle whiteSpace="pre-wrap" color="purple">{subTitle}</Text.SubTitle>
                <Text textAlign="justify" mt="1rem" whiteSpace="pre-wrap" fontSize={responsive('1.4rem', '2rem')}>{desc}</Text>
              </Box>
              <Box>{isString(chart) ? <Image src={chart} /> : chart}</Box>
            </Box>
            {!isMobile && (
              <Box flex={1}>
                段落
              </Box>
            )}
          </Flex>
          <Source>{source}</Source>
        </Box>
      ))}
      <Title
        src={bank}
        title={`看顛覆未來團隊的\n精選主題`}
        bg="brightBlue"
        titleColor="prussianBlue"
        button="基金中心"
        display="flex"
        justifyContent="center"
      />
      <Box.BgTitle titleColor="white" smallTitle="施羅德環球顛覆未來股票型基金">
        三大特色為您超前部署未來
      </Box.BgTitle>
      <Box px="1.6rem">
        <Flex flexDirection="column" alignItems="center">
          <Flex flexDirection="column">
            {futures.map((d, k) => (
              <Box borderTop={k && '1px solid #cccccc'}>
                <Title
                  px="0"
                  bg="white"
                  src={d.src}
                  title={d.title}
                  desc={d.desc}
                  key={k}
                />
              </Box>
            ))}
          </Flex>
        </Flex>
        <Box mt="3.2rem" borderRadius="1em" overflow="hidden" bg="rgba(0, 42, 94, 0.12)">
          {futures.map((d, i) => (
            <Box pt="3rem" key={i}>
              <Box px="2.6rem">
                <Box textAlign="center" borderBottom="3px solid" borderColor="prussianBlue" pb="1rem">
                  <Box width="6.6rem" mx="auto" mb="1rem">
                    <Image src={d.src} />
                  </Box>
                  <Text.SubTitle>{d.shortTitle || d.title}</Text.SubTitle>
                </Box>
                <Text mt="2rem" fontSize={responsive('1.8rem', '2rem')}>{d.subTitle}</Text>
                <Text mt="1rem" fontSize={responsive('1.3rem', '1.5rem')}>{d.text}</Text>
                <Box pt="2rem" pb="2.4rem" mx="-1rem">{isString(d.chart) ? <Image src={d.chart} /> : d.chart}</Box>
              </Box>
              <Source textAlign="justify">{d.source}</Source>
              {d.detail}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Sections
