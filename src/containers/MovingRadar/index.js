// import range from 'lodash/range'
// import random from 'lodash/random'
import React, { useState } from 'react'

// import { VictoryArea, VictoryChart, VictoryPolarAxis, VictoryTheme } from 'victory'
import BackgroundImage from '../../components/BackgroundImage'
import Box from '../../components/Box'
import FadeSlideshow from '../../components/FadeSlideshow';
import { responsive } from '../../components/ThemeProvider/theme';
// import { responsive } from '../../components/ThemeProvider/theme';

// import radarbase from './moving-radar.svg'
import radarcorner from './radarcorner.svg'


// const maxY = 4
// const count = 5
// const getData = () => {
//   const randomData = range(count).map((x) => ({ x, y: random(2, maxY) }))
//   randomData[random(count - 1)].y = maxY
//   return randomData
// }

const pics = [
  require('./1.png'),
  require('./2.png'),
  require('./3.png'),
]

const MovingRadar = () => {
  // const [data, setData] = useState(getData)
  // useInterval(() => setData(getData), 1000);
  return (
    <Box position="relative" mx={responsive(0, '-5%')}>
      <Box
        position="absolute"
        width="65%"
        overflow="hidden"
        left="50%"
        top="50.25%"
        transform="translate(-50%,-50%)"
      >
        <FadeSlideshow duration={500} timeout={1000}>
          {pics.map((src, i) => <BackgroundImage ratio={1} src={src} key={i} />)}
        </FadeSlideshow>
      </Box>
      {/* <Box position="absolute" width="100%">
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
      </Box> */}
      <BackgroundImage ratio={329 / 270} src={radarcorner} />
    </Box>
  )
}

export default MovingRadar
