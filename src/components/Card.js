import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../styles/colors';

const Card = ({ coin }) => {
  const styles = getStyles(colors);
  return (
    <View
      style={styles.wrapperContainer}
    >
      <View style={styles.iconContainer}>
        <Image
          source={{ uri: coin.imageUrl }}
          style={styles.icon}
        />
        <Text style={styles.titleFont}>
          {coin.name}
        </Text>
      </View>
      <View style={styles.pricesContainer}>
        <Text style={styles.rateFont}>
          {`$${coin.currentPrice}`}
        </Text>
        <Text style={styles.changeFont}>
          { coin.priceChangePercentage24Hr }
        </Text>
      </View>
    </View>
  );
};

export default Card;

const getStyles = colors => StyleSheet.create({
  wrapperContainer: {
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 15,
    marginTop: '5%',
    paddingHorizontal: '3%',
    height: 70,
    flexDirection: 'row',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    flexGrow: 1,
  },
  icon: {
    width: 36,
    height: 36,
  },
  ratesFont: {
    paddingTop: '10%',
    paddingRight: '10%',
  },
  titleFont: {
    fontSize: 15,
    lineHeight: 18,
    paddingLeft: '2%',
    textTransform: 'capitalize',
    color: colors.primary,
  },
  pricesContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  rateFont: {
    lineHeight: 18,
    fontSize: 15,
    color: colors.primary,
  },
  changeFont: {
    lineHeight: 18,
    fontSize: 12,
    color: '#33BB5D',
  },
});
