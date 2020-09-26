import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const DetailedText = ({ info, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Information</Text>

      <View style={styles.textContainer}>
        <View style={styles.leftFlex}>
          <Text style={styles.text}>Symbol: </Text>
          <Text style={styles.text}>Market Cap:</Text>
          <Text style={styles.text}>24h Volume:</Text>
        </View>
        <View style={styles.rightFlex}>
          <Text style={styles.text}>{info.symbol}</Text>
          <Text style={styles.text}>
            ${data.tokenRates.market_cap} {data.tokenRates.fiat_symbol}
          </Text>
          <Text style={styles.text}>
            ${data.tokenRates.volume_24h} {data.tokenRates.fiat_symbol}
          </Text>
        </View>
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
    display: 'flex',
    flexDirection: 'row',
  },
  leftFlex: {
    display: 'flex',
    marginRight: '5%',
  },
  rightFlex: {
    display: 'flex',
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
    marginBottom: 13,
  },
});
