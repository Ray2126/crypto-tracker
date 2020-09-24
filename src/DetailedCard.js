import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

const DetailedCard = ({ info, data }) => {
  console.log(info, data);
  return (
    <View style={styles.container}>
      <LineChart
        data={data.graphData}
        svg={{ stroke: 'rgb(241,90,41)' }}
        style={{ width: '100%', height: '100%' }}
        contentInset={{ top: 65, bottom: 20 }}
        curve={shape.curveBasis}
      />
    </View>
  );
};

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
});
