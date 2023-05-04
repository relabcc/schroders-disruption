import React, { useEffect } from 'react'
import isString from 'lodash/isString'

import Box from '../../../components/Box'
import Flex from '../../../components/Flex'
import Text from '../../../components/Text'
import Title from '../../../components/Title'
import Image from '../../../components/Image'
import Source from '../../../components/Source'
import Container from '../../../components/Container'
import { responsive } from '../../../components/ThemeProvider/theme'

import chart_1_3 from './1-3.svg'
import chart from './chart.png'
import global from './global.png'
import data from './data.png'

import Fund from '../../Fund'

// import bank from '../bank.png'
import Pie from '../../Pie'
import MovingRadar from '../../MovingRadar'

const features = [
  {
    title: '佈局未來新主題',
    desc: '放眼全球\n投資未來性產業',
    subTitle: '精選多元投資主題',
    src: chart,
    text: '創新顛覆正形塑未來世界樣貌，施羅德以獨特洞見尋找顛覆未來生活的新技術與產業。',
    chart: <Pie />,
    source: '施羅德投資，2021/12/31，個股僅作舉例說明，不代表任何金融商品之推薦或投資建議。',
  },
  {
    title: '聚焦顛覆新贏家',
    desc: '聚焦結構新贏家\n關注創新獨角獸企業',
    subTitle: '挖掘潛力獨角獸企業',
    src: global,
    text: '關注新興產業與前瞻技術，尋找顛覆結構的超新星，提前掌握未來新贏家。',
    chart: <MovingRadar />,
    source: '施羅德投資，2021/12/31。',
    mx: '1.2rem',
  },
  {
    title: '產業研究 x 大數據',
    desc: '六大優勢\n搶佔未來契機',
    subTitle: '跨領域專家深度分析',
    src: data,
    text: '超過百位產業分析師，並有私募股權創投經驗分享，精準掌握顛覆新星以及獨角獸企業契機。',
    chart: chart_1_3,
    source: '施羅德投資，2021/12/31。'
  },
]

const Feature = ({ onLoad }) => {
  useEffect(() => {
    if (onLoad) onLoad()
  }, [])
  return (
    <div>
      <Box.BgTitle>
        三大特色為您超前部署未來
      </Box.BgTitle>
      <Container pb="3.9rem">
        <Flex flexDirection="column" alignItems="center">
          <Flex width="100%" px={responsive(0, '8rem')} flexDirection={responsive('column', 'row')} justifyContent={responsive('auto', 'space-between')}>
            {features.map((d, k) => (
              <Box borderTop={k && responsive('1px solid #cccccc', 'none')} mx={responsive(0, d.mx)} key={k}>
                <Title
                  px="0"
                  src={d.src}
                  title={d.title}
                  desc={d.desc}
                  hasDirection
                  textAlign={responsive('left', 'center')}
                />
              </Box>
            ))}
          </Flex>
        </Flex>
        <Box mt={responsive("3.2rem", 0)} borderRadius="1em" overflow="hidden" bg="rgba(0, 42, 94, 0.12)">
          {features.map((d, i) => (
            <Box pt={responsive("3rem", 0)} key={i}>
              <Flex alignItems="center" pt={responsive('0', '8rem')} pb={responsive('0', '8.2rem')} flexDirection={responsive('column', 'row')} px={responsive('2.6rem', '9.6rem')}>
                <Box width={responsive('100%', '38%')} mr={responsive(0, '15.1%')}>
                  <Box textAlign="center" borderBottom="3px solid" borderColor="prussianBlue" pb="1rem">
                    <Box width={responsive('6.6rem', '10rem')} mx="auto" mb="1rem">
                      <Image src={d.src} />
                    </Box>
                    <Text.SubTitle>{d.title}</Text.SubTitle>
                  </Box>
                  <Text.Bold color="prussianBlue" mt="2rem" whiteSpace="pre-wrap" fontSize={responsive('1.8rem', '2.4rem')}>{d.subTitle}</Text.Bold>
                  <Text mt="0.5rem">{d.text}</Text>
                </Box>
                <Box width={responsive('105%', '47%')} pt={responsive('2rem', 0)} pb={responsive('2.4rem', 0)}>{isString(d.chart) ? <Image src={d.chart} /> : d.chart}</Box>
              </Flex>
              <Source textAlign="justify" bg="lightGray">{d.source}</Source>
            </Box>
          ))}
          {/* <Flex justifyContent="center" bg="brightBlue">
            <Title
              pt={responsive('2.7rem', '4.4rem')}
              pb={responsive('3.1rem', '5.7rem')}
              src={bank}
              title={`深入瞭解\n市場矚目的技術新星`}
              bg="brightBlue"
              titleColor="prussianBlue"
              href="https://www.schroders.com/zh-tw/tw/asset-management/funds/fund-centre/fund/schdr_f000011o7z/schroder-international-selection-fund-global-disruption-a-accumulation-usd/lu1910165726/profile/"
              button="查看資產配置"
            />
          </Flex> */}
        </Box>
      </Container>
      <Fund />
    </div>
  )
}

export default Feature
