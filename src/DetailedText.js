import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const DetailedText = ({ info, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Information</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Symbol: </Text>
        <Text style={styles.text}>{info.symbol}</Text>
        <Text style={styles.text}>Market Cap:</Text>
        <Text style={styles.text}>
          ${data.tokenRates.market_cap} {data.tokenRates.fiat_symbol}
        </Text>
        <Text style={styles.text}>24h Volume:</Text>
        <Text style={styles.text}>
          ${data.tokenRates.volume_24h} {data.tokenRates.fiat_symbol}
        </Text>
      </View>
    </View>
  );
};

export default DetailedText;

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
  },
  textContainer: {
    display: 'grid',
    gridTemplateRows: '50% 50% 50%',
    gridTemplateColumns: '40% 100%',
  },
  title: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    color: '#495162',
    marginBottom: '5%',
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    color: '#8A96AA',
  },
});
