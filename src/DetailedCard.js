import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AreaChart } from 'react-native-svg-charts';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import * as shape from 'd3-shape';

import CardRatesText from './CardRatesText';

const DetailedCard = ({ info, data }) => {
  return (
    <View style={styles.container}>
      <AreaChart
        data={data.graphData}
        svg={{
          fill: 'url(#gradient)',
          stroke: '#F15A29',
        }}
        style={{ width: '100%', height: '100%' }}
        contentInset={{ top: 65, bottom: 20 }}
        curve={shape.curveBasis}
      >
        <Gradient />
      </AreaChart>

      <CardRatesText
        style={styles.ratesFont}
        data={data}
        top="10%"
        rateSize={18}
        align="center"
      />
    </View>
  );
};

const Gradient = ({ index }) => (
  <Defs key={index}>
    <LinearGradient id={'gradient'} x1="0" y1="0" x2="0" y2="1">
      <Stop offset="0" stopColor="#F15A29" stopOpacity={0} />
      <Stop offset="1" stopColor="#f15a29" stopOpacity={1} />
    </LinearGradient>
  </Defs>
);

export default DetailedCard;

const styles = StyleSheet.create({
  container: {
    height: 185,
    width: '90%',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#F6F6F6',
    borderRadius: 15,
    marginTop: '5%',
  },
  ratesFont: {},
});
