import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PeriodContext from '../PeriodContext';
import borders from '../styles/borders';
import colors from '../styles/colors';
import typography from '../styles/typography';

const CoinCard = ({ coin }) => {
  const period = useContext(PeriodContext)[0];
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
          { coin.formattedCurrentPrice }
        </Text>
        <Text style={coin.priceChangeFor(period) < 0 ? styles.priceChangeNegative : styles.priceChangePositive}>
          { coin.formattedPriceChangeFor(period) }
        </Text>
      </View>
    </View>
  );
};

export default CoinCard;

const styles = StyleSheet.create({
  container: {
    ...borders.roundedBorder,
    marginBottom: '5%',
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
  priceChangePositive: {
    ...typography.caption,
    color: colors.positive,
  },
  priceChangeNegative: {
    ...typography.caption,
    color: colors.negative,
  },
});
