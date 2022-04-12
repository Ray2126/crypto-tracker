import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import typography from '../styles/typography';
import colors from '../styles/colors';

const CoinDetails = ({ coin }) => {
  return (
    <>
      <Text style={styles.header}>Information</Text>
      <View style={styles.body}>
        <View style={styles.leftTextContainer}>
          <Text style={styles.text}>
            Symbol:
          </Text>
          <Text style={styles.text}>
            Market Cap:
          </Text>
        </View>
        <View style={styles.rightTextContainer}>
          <Text style={styles.text}>
            {coin.symbol}
          </Text>
          <Text style={styles.text}>
            {coin.formattedMarketCap} {coin.currency.toUpperCase()}
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
    ...typography.body,
    textAlign: 'center',
    marginBottom: '5%',
    color: colors.primary,
  },
  text: {
    ...typography.body,
    color: colors.secondary,
  },
  leftTextContainer: {
    width: '30%',
  },
  rightTextContainer: {
    width: '60%',
  },
});

export default CoinDetails;