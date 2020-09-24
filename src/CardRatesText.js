import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CardRatesText = ({ data, rateSize, changeSize, align }) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      position: 'absolute',
      alignItems: align,
      width: '95%',
      marginTop: '2%',
    },
    rateFont: {
      fontSize: rateSize || 15,
      lineHeight: 18,
      color: '#495162',
    },
    changeFont: {
      fontSize: changeSize || 12,
      lineHeight: 18,
      color: '#33BB5D',
    },
  });

  return (
    <View style={styles.container}>
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
  );
};

export default CardRatesText;

const getPercentageChange = (past, current) => {
  const percent = Math.round(((current - past) / current) * 100.0 * 100) / 100;
  const totalChange = Number.parseFloat(current - past).toPrecision(6);
  return totalChange < 0
    ? `${percent}% ($${totalChange})`
    : `+${percent}% ($${totalChange})`;
};
