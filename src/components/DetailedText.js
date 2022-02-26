import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import typography from '../styles/typography';

const DetailedText = ({ info, data }) => {
  const { colors } = useTheme();
  const textColor = {
    color: colors.secondary
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.primary }]}>Information</Text>

      <View style={styles.textContainer}>
        <View style={styles.leftFlex}>
          <Text style={[styles.text, textColor]}>
            Symbol:
          </Text>
          <Text style={[styles.text, textColor]}>
            Market Cap:
          </Text>
          <Text style={[styles.text, textColor]}>
            24h Volume:
          </Text>
        </View>
        <View style={styles.rightFlex}>
          <Text style={[styles.text, textColor]}>
            {info.symbol}
          </Text>
          <Text style={[styles.text, textColor]}>
            ${data.tokenRates.market_cap} {data.tokenRates.fiat_symbol}
          </Text>
          <Text style={[styles.text, textColor]}>
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
    marginTop: '8%',
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
    ...typography.body,
    textAlign: 'center',
    marginBottom: '5%',
  },
  text: {
    ...typography.body,
    lineHeight: 21,
    marginBottom: 13,
  },
});
