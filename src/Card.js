import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LineChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import CardRatesText from './CardRatesText';

const Card = ({ info, data }) => {
  return info ? (
    data ? (
      <View style={styles.container}>
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
          style={styles.ratesFont}
          rateSize="15"
          changeSize="12"
          align="flex-end"
        />
      </View>
    ) : (
      <Text>Loading</Text>
    )
  ) : (
    <Text>Loading</Text>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: 140,
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
