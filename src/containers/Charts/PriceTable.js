import React from 'react';
import get from 'lodash/get'
import { range } from 'lodash';

import Table from './Table'

import Data from '../../contexts/data'
import Source from '../../components/Source'

const names = [
  '累積報酬, 美元報酬 (%)',
  '今年以來',
  '三個月',
  '六個月',
  '一年',
  '二年',
  '三年',
  '五年',
  '標準差',
]

const PriceTable = ({ isMobile }) => {
  return (
    <Data path="/performance">
      {(data) => {
        if (!data.length) return null
        const table = names.map((name) => [name, data[0][name], data[1][name], data[2][name], data[3][name]])
        const note = get(data, [4, names[0]])
        const priceData = {
          th: [...table.map(d => d[0])],
          tbody: range((table[0].length - 1)).map(index => [...table.map(d => d[index + 1])]),
          color: ['darkBlue', 'darkBlue', 'black', 'numberGreen']
        }
        const priceDataMobile= {
          th: [...table[0].slice(0, 2), ...table[0].slice(3)],
          tbody: table.slice(1).map(d => [...d.slice(0, 2), ...d.slice(3)]),
          color: ['darkBlue', 'darkBlue', 'black', 'numberGreen']
        }
        // ['累積報酬, \n美元報酬 \n(%)', '施羅德(環)\n環球永續增長', '四分位\n排名', '同類型基金平均\n(86檔)', 'MSCI AC World Index'],
        return (
          <>
            <Table nowData={isMobile ? priceDataMobile : priceData} isMobile={isMobile} />
            <Source mb="0">{note}</Source>
          </>
        )
      }}
    </Data>
  );
};

export default PriceTable;
