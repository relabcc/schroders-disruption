import React from 'react'
import isString from 'lodash/isString'
import loadable from '@loadable/component'

import Box from '../../../components/Box'
import Flex from '../../../components/Flex'
import Text from '../../../components/Text'
import Title from '../../../components/Title'
import Image from '../../../components/Image'
import Source from '../../../components/Source'
import { responsive } from '../../../components/ThemeProvider/theme'
import AspectRatio from '../../../components/AspectRatio'

import chart_1_3 from './1-3.png'
import chart from './chart.png'
import global from './global.png'
import data from './data.png'

import bank from '../bank.png'
import Pie from '../../Pie'

const MovingRadar = loadable(() => import('../../MovingRadar'), { fallback: <AspectRatio ratio={328 / 320} /> })

const features = [
  {
    title: '佈局未來新主題',
    desc: '放眼全球 投資未來性產業',
    subTitle: '精選最完整投資主題',
    src: chart,
    text: '挖掘巨量數據下的洞見，聚焦未來投資性主題，為您準備最完善的投資組合。',
    chart: <Pie />,
    source: '施羅德投資，2021/12/31。',
  },
  {
    title: '聚焦顛覆新贏家',
    subTitle: '挖掘潛力獨角獸企業',
    desc: '關注創新獨角獸',
    src: global,
    text: '挖關注產業前瞻技術，挖掘潛力新星，聚焦顛覆性獨角獸企業。掘潛力新星，聚焦顛覆性獨角獸企業。',
    chart: <MovingRadar />,
    source: 'Lipper, 美元計價，統計過去兩年至 2021/12/31。MSCI AC World 指數。iShares megatrends ETF and Vaneck ETF。 個股僅作舉例說明，不代表任何金融商品之推介或投資建議，個股績效，不代表未來走勢或基金績效。'
  },
  {
    title: '產業研究 x 大數據',
    subTitle: '跨領域專家深度分析',
    desc: '六大優勢 搶佔未來契機',
    src: data,
    text: '不僅擁有超過百位跨領域專家，更有私募股權創投專門研究未上市公司之非公開資訊，精準掌握多元消息。',
    chart: chart_1_3,
    source: '施羅德投資，2021/12/31。'
  },
]

const Feature = () => {
  return (
    <div>
      <Box.BgTitle smallTitle="施羅德環球顛覆未來股票型基金">
        三大特色為您超前部署未來
      </Box.BgTitle>
      <Box px={responsive('1.6rem', '3.2rem')} pb="3.9rem">
        <Flex flexDirection="column" alignItems="center">
          <Flex flexDirection="column" width="100%" maxWidth="480px">
            {features.map((d, k) => (
              <Box borderTop={k && '1px solid #cccccc'} key={k}>
                <Title
                  px="1.2em"
                  bg="white"
                  src={d.src}
                  title={d.title}
                  desc={d.desc}
                />
              </Box>
            ))}
          </Flex>
        </Flex>
        <Box mt="3.2rem" maxWidth={responsive('48rem', '112rem')} mx="auto" borderRadius="1em" overflow="hidden" bg="rgba(0, 42, 94, 0.12)">
          {features.map((d, i) => (
            <Box pt="3rem" key={i}>
              <Box px="2.6rem">
                <Box textAlign="center" borderBottom="3px solid" borderColor="prussianBlue" pb="1rem">
                  <Box width="6.6rem" mx="auto" mb="1rem">
                    <Image src={d.src} />
                  </Box>
                  <Text.SubTitle>{d.title}</Text.SubTitle>
                </Box>
                <Text.Bold color="prussianBlue" mt="2rem" whiteSpace="pre-wrap" fontSize={responsive('1.8rem', '2rem')}>{d.subTitle}</Text.Bold>
                <Text mt="1rem" fontSize={responsive('1.3rem', '1.5rem')}>{d.text}</Text>
                <Box pt={"2rem"} pb={"2.4rem"} mx="-1rem">{isString(d.chart) ? <Image src={d.chart} /> : d.chart}</Box>
              </Box>
              <Source textAlign="justify">{d.source}</Source>
            </Box>
          ))}
          <Flex justifyContent="center" bg="brightBlue">
            <Title
              src={bank}
              title={`深入瞭解\n市場矚目的技術新星`}
              bg="brightBlue"
              titleColor="prussianBlue"
              href="https://www.schroders.com/zh-tw/tw/asset-management/funds/fund-centre/fund/schdr_f000011o7z/schroder-international-selection-fund-global-disruption-a-accumulation-usd/lu1910165726/profile/"
              button="查看資產配置"
            />
          </Flex>
        </Box>
      </Box>
    </div>
  )
}

export default Feature
