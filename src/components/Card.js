import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import borders from '../styles/borders';
import colors from '../styles/colors';
import typography from '../styles/typography';

const Card = ({ coin }) => {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.coinContainer}>
        <Image
          source={{ uri: coin.imageUrl }}
          style={styles.coinIcon}
        />
        <Text style={styles.coinName}>
          {coin.name}
        </Text>
      </View>
      <View style={styles.pricesContainer}>
        <Text style={styles.currentPrice}>
          {`$${coin.currentPrice}`}
        </Text>
        <Text style={styles.priceChange}>
          { coin.priceChangePercentage24Hr }
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    ...borders.roundedBorder,
    marginTop: '5%',
    paddingHorizontal: '3%',
    height: 70,
    flexDirection: 'row',
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
  coinIcon: {
    width: 36,
    height: 36,
  },
  coinName: {
    ...typography.body,
    paddingLeft: '4%',
    color: colors.primary,
  },
  pricesContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  currentPrice: {
    ...typography.body,
    color: colors.primary,
  },
  priceChange: {
    ...typography.caption,
    color: colors.positive,
  },
});
