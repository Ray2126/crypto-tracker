import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import typography from '../styles/typography';
import colors from '../styles/colors';

const DetailedText = ({ coin }) => {
  return (
    <>
      <Text style={styles.header}>Information</Text>
      <View style={styles.body}>
        <View>
          <Text style={styles.text}>
            Symbol:
          </Text>
          <Text style={styles.text}>
            Market Cap:
          </Text>
        </View>
        <View>
          <Text style={styles.text}>
            {coin.symbol}
          </Text>
          <Text style={styles.text}>
            ${coin.marketCap} {coin.currency}
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailedText;

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
});
