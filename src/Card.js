import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LineChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

import CardBase from './CardBase'
import CardRatesText from './CardRatesText';

const Card = ({ info, data }) => {
  return data ? (
    <CardBase height={140}>
      <LineChart
        data={data.graphData}
        svg={{ stroke: 'rgb(241,90,41)' }}
        style={styles.graph}
        contentInset={{ top: 65, bottom: 20 }}
        curve={shape.curveBasis}
      />
      <View style={styles.iconContainer}>
        <Image source={{ uri: info.icon_address }} style={styles.icon} />
        <Text style={styles.titleFont}>{info.name}</Text>
      </View>
      <CardRatesText
        data={data}
        rateSize={15}
        changeSize={12}
        align="flex-end"
      />
    </CardBase>
  ) : (
      <Text>Loading</Text>
    )

};

export default Card;

const styles = StyleSheet.create({
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: '10%',
    left: '3%',
    width: '100%',
  },
  graph: {
    height: '100%',
    width: '100%',
  },
  icon: {
    width: 36,
    height: 36,
  },
  ratesFont: {
    paddingTop: '10%',
    paddingRight: '10%',
  },
  titleFont: {
    fontSize: 15,
    lineHeight: 18,
    marginTop: '2%',
    paddingLeft: '2%',
    color: '#495162',
    textTransform: 'capitalize',
  },
});
