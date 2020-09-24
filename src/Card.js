import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LineChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

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
        <View style={styles.rateContainer}>
          <Text style={styles.rateFont}>
            {`$${Number.parseFloat(data.tokenRates.rate).toPrecision(6)}`}
          </Text>
          <Text style={styles.changeFont}>
            {getPercentageChange(
              data.graphData[0],
              data.graphData[data.graphData.length - 1]
            )}
          </Text>
        </View>
      </View>
    ) : (
      <Text>Loading</Text>
    )
  ) : (
    <Text>Loading</Text>
  );
};

const getPercentageChange = (past, current) => {
  const percent = Math.round(((current - past) / current) * 100.0 * 100) / 100;
  const totalChange = Number.parseFloat(current - past).toPrecision(6);
  return totalChange < 0
    ? `${percent}% ($${totalChange})`
    : `+${percent}% ($${totalChange})`;
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
    marginTop: '2%',
    paddingLeft: '2%',
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
