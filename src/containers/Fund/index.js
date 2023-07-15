import React, { useEffect, useState } from "react";

import Box from "../../components/Box";
// import Container from '../../components/Container'
import { responsive } from "../../components/ThemeProvider/theme";

// import Table from '../Charts/Table'

import Container from "../../components/Container";
// import DeskBlock from '../../components/DeskBlock'
import Flex from "../../components/Flex";
import Source from "../../components/Source";

const data = [
  {
    th: "成立日期",
    td: "2018/12/12",
  },
  {
    th: "基金規模",
    td: "701.24（百萬美元）",
  },
  {
    th: "註冊地",
    td: "盧森堡",
  },
  {
    th: "參考指標",
    td: "MSCI AC World NR",
  },
  {
    th: "總持股數",
    td: "120檔",
  },
  {
    th: "美元級別",
    td: "前收A級別／後收U級別",
  },
];

const Fund = () => {
  return (
    <Box>
      <Box.BgTitle>基金基本資料</Box.BgTitle>
      <Container pt={responsive("2.4em", "4.5em")}>
        <Box as="table" width="100%">
          <tbody>
            {data.map(({ th, td }, i) => (
              <Box as="tr" color="prussianBlue" fontWeight="500" key={i}>
                <Box
                  borderBottom="1px solid"
                  borderColor="brightGray"
                  width="7em"
                  px={responsive("1em", "2.5em")}
                  py="1.4em"
                  textAlign="center"
                  as="th"
                  fontSize={responsive("1em", "1.2em")}
                >
                  {th}
                </Box>
                <Box
                  borderBottom="1px solid"
                  borderColor="brightGray"
                  px={responsive("1.8em", "5em")}
                  fontSize={responsive("1.2em", "1.4em")}
                  as="td"
                >
                  {td}
                </Box>
              </Box>
            ))}
          </tbody>
        </Box>
      </Container>
      <Flex
        position="relative"
        alignItems="center"
        bg="bgGray"
        height={responsive("auto", "10.4em")}
        mt={responsive("1em", "2em")}
      >
        <Source width="100%" prefix="">
          本基金具有（歐盟）2019/2088號法規（關於永續金融揭露規範中有關永續的揭露）第8條所定義的環境和/或社會特點。
        </Source>
      </Flex>
    </Box>
  );
};

export default Fund;
