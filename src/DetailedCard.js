import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { AreaChart } from 'react-native-svg-charts';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import * as shape from 'd3-shape';

import CardBase from './CardBase';
import CardRatesText from './CardRatesText';

const DetailedCard = ({ data }) => {
  return data ? (
    <CardBase height={185}>
      <AreaChart
        data={data.graphData}
        svg={{
          fill: 'url(#gradient)',
          stroke: '#F15A29',
          strokeWidth: 1.5,
        }}
        style={styles.graph}
        contentInset={{ top: 65, bottom: 20 }}
        curve={shape.curveBasis}
      >
        <Gradient />
      </AreaChart>

      <CardRatesText
        data={data}
        top="10%"
        rateSize={18}
        align="center"
      />
    </CardBase>
  ) : <Text></Text>;
};

const Gradient = ({ index }) => (
  <Defs key={index}>
    <LinearGradient id={'gradient'} x1="0" y1="0" x2="0" y2="1">
      <Stop offset="0" stopColor="#F15A29" stopOpacity={1} />
      <Stop offset="1" stopColor="#F15A29" stopOpacity={0} />
    </LinearGradient>
  </Defs>
);

export default DetailedCard;

const styles = StyleSheet.create({
  graph: {
    width: '100%',
    height: '100%',
  }
});
