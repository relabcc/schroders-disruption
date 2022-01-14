import React from 'react';
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryGroup,
  VictoryContainer,
  VictoryLegend,
} from 'victory';
import merge from 'lodash/merge'

import theme from '../../components/ThemeProvider/theme'
import withIE from './withIE'

const chartTheme = merge({}, VictoryTheme.grayscale, {
  bar: {
    style: {
      data: {
        strokeWidth: 2,
      },
      labels: {
        fontWeight: 700,
        fontSize: 10,
        fontFamily: 'inherit',
      },
    }
  },
  line: {
    style: {
      data: {
        strokeWidth: 1,
        strokeDasharray: '10, 5',
      }
    }
  },
  axis: {
    style: {
      axisLabel: {
        fontFamily: 'inherit',
      },
      tickLabels: {
        fontFamily: 'inherit',
      },
      axis: {
        stroke: 'transparent'
      },
    },
  }
})

const barWidhth = (isMobile) => isMobile ? 22 : 24

const Bar = ({ data, isMobile, max, colors, labelColors }) => {
  return (
    <VictoryChart
      theme={chartTheme}
      domain={{ y: [0, max + 5] }}
      width={isMobile ? 600 : 1200}
      height={600}
      containerComponent={<VictoryContainer />}
      padding={{
        top: isMobile ? 50 : 10,
        left: 100,
        bottom: isMobile ? 40 : 70,
        right: 40,
      }}
    >
      <VictoryAxis
        style={{
          grid: {
            fill: 'transparent',
            stroke: theme.colors.numberGreen,
            strokeWidth: 1,
            strokeDasharray: '2, 5',
          }
        }}
        dependentAxis
      />
      <VictoryAxis
        style={{
          grid: {
            fill: 'transparent',
            strokeWidth: 0,
            strokeDasharray: '2, 5',
          },
          tickLabels: {
            fontSize: 18,
            fontWeight: 700,
          },
        }}
      />
      <VictoryGroup
        horizontal
        offset={barWidhth(isMobile) + 1}
        style={{ data: { width: barWidhth(isMobile) } }}
      >
        {data.map((d, i) => (
          <VictoryBar
            data={d}
            style={{
              data: {
                fill: colors[i],
                stroke: theme.colors.titleBlue,
              },
              labels: {
                fill: labelColors[i],
                fontSize: 18
              },
            }}
            key={i}
          />
        ))}
      </VictoryGroup>
      <VictoryLegend
        x={isMobile ? 510 : 1100}
        y={450}
        centerTitle
        orientation="vertical"
        gutter={20}
        style={{
          labels: { fontSize: 20, fontWeight: 'bold' }
        }}
        data={[
          { name: '基金', symbol: { fill: colors[1], type: 'square' } },
          { name: '指標', symbol: { fill: colors[0], type: 'square' } },
        ]}
      />
    </VictoryChart>
  )
}

export default withIE(Bar);
