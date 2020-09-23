import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LineChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

import getDataHook from './utils/getDataHook';

const Card = ({ name, period }) => {
  const { graphData, tokenInfo, tokenRates } = getDataHook(name, period);

  return (
    <View style={styles.container}>
      <LineChart
        data={graphData}
        svg={{ stroke: 'rgb(241,90,41)' }}
        style={styles.graph}
        contentInset={{ top: 60, bottom: 20 }}
        curve={shape.curveBasis}
      />
      <View style={styles.iconContainer}>
        <Image source={{ uri: tokenInfo.icon_address }} style={styles.icon} />
        <Text style={styles.titleFont}>{name}</Text>
      </View>
      <View style={styles.rateContainer}>
        <Text style={styles.rateFont}>{`$${Number.parseFloat(
          tokenRates.rate
        ).toPrecision(6)}`}</Text>
        <Text style={styles.changeFont}>+4.48% ($0.0097)</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: '18%',
    width: '90%',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#F6F6F6',
    borderRadius: 15,
    marginTop: '5%',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: '10%',
    left: '3%',
  },
  rateContainer: {
    display: 'flex',
    position: 'absolute',
    top: '14%',
    right: '4%',
    alignItems: 'flex-end',
  },
  graph: {
    height: '100%',
    width: '100%',
  },
  icon: {
    width: 36,
    height: 36,
  },
  titleFont: {
    fontSize: 15,
    lineHeight: 18,
    marginTop: '10%',
    paddingLeft: '5%',
    color: '#495162',
    textTransform: 'capitalize',
  },
  rateFont: {
    fontSize: 15,
    lineHeight: 18,
    color: '#495162',
  },
  changeFont: {
    fontSize: 12,
    lineHeight: 18,
    color: '#33BB5D',
  },
});
