import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LineChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

import getDataHook from './utils/getDataHook';
import { periodType, blockchainCodes } from './utils/types';

const Card = () => {
  const { graphData, tokenInfo, tokenRates } = getDataHook(
    blockchainCodes.bitcoin,
    periodType.week
  );

  return (
    <View style={styles.container}>
      <LineChart
        data={graphData}
        svg={{ stroke: 'rgb(134, 65, 244)' }}
        style={styles.graph}
        contentInset={{ top: 60, bottom: 20 }}
        curve={shape.curveBasis}
      />
      <Image source={{ uri: tokenInfo.icon_address }} style={styles.icon} />
      <Text style={styles.titleFont}>Bitcoin</Text>
      <Text style={styles.rateFont}>{`$${
        Math.round(tokenRates.rate * 100) / 100
      }`}</Text>
      <Text style={styles.changeFont}>+4.48% ($0.0097)</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: '20%',
    width: '90%',
    border: '2px solid #F6F6F6',
    borderRadius: 15,
  },
  graph: {
    height: '100%',
    width: '100%',
  },
  icon: {
    width: 36,
    height: 36,
    position: 'absolute',
    top: '0.5rem',
    left: '0.7rem',
  },
  titleFont: {
    fontSize: 15,
    lineHeight: 18,
    position: 'absolute',
    top: '1.2rem',
    left: '3.4rem',
    color: '#495162',
  },
  rateFont: {
    fontSize: 15,
    lineHeight: 18,
    color: '#495162',
    position: 'absolute',
    top: '1rem',
    right: '0.8rem',
  },
  changeFont: {
    fontSize: 12,
    lineHeight: 18,
    color: '#33BB5D',
    position: 'absolute',
    top: '2rem',
    right: '0.8rem',
  },
});
