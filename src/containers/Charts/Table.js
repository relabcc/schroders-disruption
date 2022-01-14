import React, { useCallback } from 'react';

import Box from '../../components/Box'
import { responsive } from '../../components/ThemeProvider/theme'

const Table = ({ nowData, thAlign, tbodyAlign, fontSize = '1.143em', bg = 'darkGreen', noMobile }) => {
  const getResponsive = useCallback((mobile, desk) => noMobile ? desk : responsive(mobile, desk), [noMobile])
  return (
    <Box is="table" fontSize={fontSize}>
      <Box is="thead">
        <Box is="tr">
          {nowData.th.map((h, i, { length }) => (
            <Box
              is="th"
              color={getResponsive(i ? i == length - 1 ? 'numberGreen' : 'black' : 'white', 'white')}
              bg={getResponsive(i ? 'white' : bg, bg)}
              px="0.5em"
              py="1em"
              textAlign={getResponsive('center', thAlign ? thAlign : i ? 'right' : 'left')}
              whiteSpace="pre-wrap"
              fontWeight="bold"
              key={i}
            >
              {h}
            </Box>
          ))}
        </Box>
      </Box>
      {nowData.tbody.map((h, i) => (
        <Box is="tbody" key={i}>
          <Box is="tr">
            {h.map((n, k) => (
              <Box
                whiteSpace="pre-wrap"
                is="td"
                px="0.5em"
                py="1em"
                fontWeight="bold"
                bg={getResponsive(k ? 'white' : bg, 'white')}
                color={getResponsive(k ? (k == h.length - 1 ? 'numberGreen' : 'black') : 'white', nowData.color[i])}
                borderBottom={responsive('none', '1px solid black')}
                textAlign={getResponsive('center', tbodyAlign ? tbodyAlign : k ? 'right' : 'left')}
                key={k}
              >
                {n}
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Table;
