import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory-native';
import colors from '../styles/colors';

const Chart = ({ graphData }) => {
  return (
    <VictoryChart>
      <VictoryAxis
        fixLabelOverlap
        style={{
          axis: { stroke: colors.secondary},
          tickLabels: { stroke: colors.secondary, fontSize: 12, strokeWidth: 0.3 },
          ticks: { stroke: colors.secondary, size: 5 },
        }}
      />
      <VictoryAxis dependentAxis style={{
        axis: { stroke: colors.secondary },
        tickLabels: { stroke: colors.secondary, fontSize: 12, strokeWidth: 0.3 },
        grid: { stroke: '#ECEFF1' },
        ticks: { stroke: colors.secondary, size: 5 },
      }} />
      <VictoryLine
        style={{
          data: { stroke: '#c43a31' },
          parent: { border: '1px solid #ccc' }
        }}
        data={graphData}
      />
    </VictoryChart>
  );
};

export default Chart;