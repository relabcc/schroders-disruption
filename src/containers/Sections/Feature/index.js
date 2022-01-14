import React, { useEffect } from 'react'
import { isArray } from 'lodash'

import Container from '../../../components/Container'
import Box from '../../../components/Box'

import Image from '../../../components/Image'
import Module from '../../../components/Module'
import Text from '../../../components/Text'
import Title from '../../../components/Title'
import Source from '../../../components/Source'
import { responsive } from '../../../components/ThemeProvider/theme'
import useResponsive from '../../../contexts/mediaQuery/useResponsive'

import icon2_1 from './2-1.png'
import icon2_2 from './2-2.png'
import icon2_3 from './2-3.png'
import icon2_1_1 from './2-1-1.png'
import icon2_1_2 from './2-1-2.png'
import icon2_1_3 from './2-1-3.png'
import icon2_2_1 from './2-2-1.jpg'
import mobileicon2_2_1 from './mobile-2-2-1.jpg'
import icon2_2_2_1 from './2-2-2-1.png'
import icon2_2_2_2 from './2-2-2-2.png'
import icon2_2_2_3 from './2-2-2-3.png'
import icon2_2_2_4 from './2-2-2-4.png'
import icon2_3_1 from './2-3-1.png'

const sets = [
  {
    label: '聚焦三大永續主題',
    src: icon2_1
  },
  {
    label: '獨家永續投資流程',
    src: icon2_2
  },
  {
    label: '專業團隊分工管理',
    src: icon2_3
  },
]

const data = [
  {
    title: '聚焦三大永續主題',
    step: '一',
    src: icon2_1,
    text: '選股策略以永續發展經營為主要標準之一，涵蓋永續環境、創新未來、健康生活等三大永續主題。',
    // logoWidth: responsive('50%', '70%'),
    content: [
      [
        {
          label: '永續環境',
          src: icon2_1_1,
          text: '企業營運或產品有利環境與能源永續利用。\n例如：全球風力發電龍頭、美國最大農機等標的。',
        },
        {
          label: '創新未來',
          src: icon2_1_2,
          text: '企業主要業務或服務能夠提供人更美好未來。\n例如：全球最大軟體服務公司。',
        },
        {
          label: '健康生活',
          src: icon2_1_3,
          text: '企業產品為讓人擁有健康生活與生活模式。\n例如：全球最大抗癌製藥廠、歐洲最大運動品牌。',
        },
      ]
    ]
  },
  {
    title: '獨家永續投資流程',
    step: '二',
    src: icon2_2,
    text: '將企業的「永續競爭力」評估設定於投資目標中，投資流程中則利用集團永續評等工具(SustainEx)協助經理人管理投組。除了傳統的企業獲利評估外，加入永續因子考量，挑選能夠面對永續浪潮下而能維持長期經營的標的。',
    subTitle: ['主動排除爭議性產業，有助投資人避開未來潛藏的ESG永續風險', '質化深入分析－永續評分架構'],
    content: [
      {
        src: icon2_2_1,
        mobileSrc: mobileicon2_2_1
      },
      [
        {
          label: '對環境的尊重',
          src: icon2_2_2_1,
          text: '企業與供應商否對環境產生重大的正/負面影響',
        },
        {
          label: '公平公正對待員工、\n供應商和客戶',
          src: icon2_2_2_2,
          text: '企業是否提供合理的薪資、工作環境以及公平對待',
        },
        {
          label: '良好的企業公民',
          src: icon2_2_2_3,
          text: '企業經營是否遵守法規並保持高道德標準',
        },
        {
          label: '資金運用的謹慎性',
          src: icon2_2_2_4,
          text: '企業資金分配是否考量長期風險和報酬，並維持透明度並保持與股東之間的溝通',
        },
      ]
    ]
  },
  {
    title: '專業團隊分工管理',
    step: '三',
    text: '結合集團研究資源，分析師、數據團隊，以及專長於永續投資的分析專家們，本基金由ESG永續團隊+全球股票團隊共同管理。除了尋找投資機會，也透過投資者的影響力積極參與議合，鼓勵引導企業以永續發展為經營策略。',
    src: icon2_3,
    source: true,
    content: [
      {
        src: icon2_3_1
      }
    ]
  }
]

const Feature = ({ onLoad }) => {
  const { isMobile } = useResponsive()
  useEffect(() => onLoad(), [])

  return (
    <Box>
      <Container pb="3em">
        <Box.Title>施羅德(環)環球永續增長基金三大特色</Box.Title>
        <Module bigTitle bigText content={sets} logoWidth={responsive('6.428em', '65%')} />
      </Container>
      {data.map(({ title, step, src, subTitle, text, logoWidth, source, content }, i) => (
        <Box key={i}>
          <Title title={title} src={src} step={step}  />
          <Container py="3em">
            <Text.Desc>{text}</Text.Desc>
            {content.map((d, i) => isArray(d) ?  (
              <Box mt={responsive('3em', '2em')} key={i}>
                {subTitle && <Text.SmallTitle>{subTitle[i]}</Text.SmallTitle>}
                <Module content={d} logoWidth={logoWidth} />
                <Source>資料來源：施羅德投資，2021/05/31。</Source>
              </Box>
            ) : (
              <Box mt={responsive('3em', '2em')} key={i}>
                {subTitle && <Text.SmallTitle>{subTitle[i]}</Text.SmallTitle>}
                <Box mt="1em">
                  <Image src={isMobile ? (d.mobileSrc || d.src) : d.src} />
                </Box>
                {source && <Source>資料來源：施羅德投資，2021/05/31。</Source>}
              </Box>
            ))}
          </Container>
        </Box>
      ))}
    </Box>
  )
}

export default Feature
