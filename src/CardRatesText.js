import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CardRatesText = ({ data, rateSize, changeSize, align }) => {
  const { tokenRates, graphData } = data;
  return (
    <View style={[styles.container, { alignItems: align || 'center' }]}>
      <Text style={[styles.rateFont, { fontSize: rateSize || 15 }]}>
        {`$${Number.parseFloat(tokenRates.rate).toPrecision(6)}`}
      </Text>
      <Text style={[styles.changeFont, { fontSize: changeSize || 12 }]}>
        {getRatePercentageChange(
          graphData[0],
          graphData[graphData.length - 1]
        )}
      </Text>
    </View>
  );
};

export default CardRatesText;

const getRatePercentageChange = (past, current) => {
  let percent = Math.round(((current - past) / current) * 100.0 * 100) / 100;
  let totalChange = Number.parseFloat(current - past).toPrecision(6);
  let percentPrepend = '';
  let totalChangePrepend = '';
  if (totalChange < 0) {
    percentPrepend += '-';
    totalChangePrepend += '-';
    percent = Math.abs(percent);
    totalChange = Math.abs(totalChange);
  } else {
    percentPrepend += '+'
  }
  return `${percentPrepend}${percent}% (${totalChangePrepend}$${totalChange})`
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'absolute',
    width: '95%',
    marginTop: '4%',
  },
  rateFont: {
    lineHeight: 18,
    color: '#495162',
  },
  changeFont: {
    lineHeight: 18,
    color: '#33BB5D',
  },
});
