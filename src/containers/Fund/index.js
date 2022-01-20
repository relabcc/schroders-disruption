import React, { useEffect, useState } from 'react'

import Box from '../../components/Box'
// import Container from '../../components/Container'
import { responsive } from '../../components/ThemeProvider/theme'

// import Table from '../Charts/Table'

import Container from '../../components/Container'
import DeskBlock from '../../components/DeskBlock'

const data = [
  {
    th: '成立日期',
    td: '2018/12/12'
  },
  {
    th: '基金規模',
    td: '48.90（百萬美元）'
  },
  {
    th: '註冊地',
    td: '盧森堡'
  },
  {
    th: '參考指標',
    td: 'MSCI AC World NR'
  },
  {
    th: '總持股數',
    td: '124檔'
  },
  {
    th: '美元級別',
    td: '前收A級別／後收U級別'
  },
]

const Fund = () => {

  return (
    <Box pb="4rem">
      <Box.BgTitle>基金基本資料</Box.BgTitle>
      <Container pt={responsive('2.4rem', '4.5rem')}>
        <Box as="table">
          <tbody>
            {data.map(({ th, td }, i) => (
              <Box as="tr" color="prussianBlue" fontWeight="500"  borderBottom="0.5px solid" borderColor="brightGray" key={i}>
                <Box width="6em" px={responsive('1rem', '2.5rem')} py="1.4rem" textAlign="center" as="th" fontSize={responsive('1em', '3.2rem')}>{th}</Box>
                <Box px={responsive('1.8rem', '5rem')} fontSize={responsive('1.2rem', '2.4rem')} as="td">{td}</Box>
              </Box>
            ))}
          </tbody>
        </Box>
      </Container>
    </Box>
  )
}

export default Fund
