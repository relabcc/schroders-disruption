import React, { useEffect, useState } from 'react'

import Box from '../../components/Box'
import Container from '../../components/Container'
import { responsive } from '../../components/ThemeProvider/theme'

import Table from '../Charts/Table'

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
      <Box px="1.6rem" maxWidth={responsive('51.2rem', '116rem')} mx="auto">
        <Box as="table" mt="1.6rem">
          <tbody>
            {data.map(({ th, td }, i) => (
              <Box as="tr" color="prussianBlue" borderBottom="0.5px solid" borderColor="prussianBlue" key={i}>
                <Box width="6em" px="1em" py="1.4rem" textAlign="center" as="th">{th}</Box>
                <Box px="1.8rem" fontSize="1.2rem" as="td">{td}</Box>
              </Box>
            ))}
          </tbody>
        </Box>
      </Box>
    </Box>
  )
}

export default Fund
