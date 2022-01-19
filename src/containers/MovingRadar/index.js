import range from 'lodash/range'
import random from 'lodash/random'
import React, { useState } from 'react'
import { useInterval } from 'react-use';

import { VictoryArea, VictoryChart, VictoryPolarAxis, VictoryTheme } from 'victory'
import BackgroundImage from '../../components/BackgroundImage'
import Box from '../../components/Box'

import radarbase from './moving-radar.svg'

const maxY = 4
const count = 5
const getData = () => {
  const randomData = range(count).map((x) => ({ x, y: random(2, maxY) }))
  randomData[random(count - 1)].y = maxY
  return randomData
}

const offset = 18
const MovingRadar = () => {
  const [data, setData] = useState(getData)
  useInterval(() => setData(getData), 1000);
  return (
    <Box position="relative">
      <Box position="absolute" width="100%">
        <VictoryChart
          polar
          animate={{
            duration: 500,
            onLoad: { duration: 500 },
          }}
          padding={{ top: 3, left: 70, right: 66 }}
          width={328}
          height={300}
          domain={{
            y: [0, maxY],
          }}
          startAngle={offset}
          endAngle={360 + offset}
          theme={VictoryTheme.grayscale}
        >
          <VictoryPolarAxis
            dependentAxis
            standalone={false}
            style={{
              axis: { stroke: "none" },
              grid: { stroke: "#002a5e" }
            }}
            tickFormat={() => null}
          />
          <VictoryPolarAxis
            standalone={false}
            style={{
              axis: { stroke: "#002a5e" },
            }}
            tickFormat={() => null}
          />
          <VictoryArea
            data={data}
            interpolation="cardinal"
            style={{
              data: { fill: "#7D3787", opacity: 0.5 },
            }}
          />
        </VictoryChart>
      </Box>
      <BackgroundImage ratio={300 / 328} src={radarbase} />
    </Box>
  )
}

export default MovingRadar
