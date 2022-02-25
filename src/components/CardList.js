import React, { useContext } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Card from './Card';
import CoinsContext from '../CoinsContext';

const CardList = ({ nav }) => {
  const coins = useContext(CoinsContext);
  return (
    <View style={styles.container}>
      {coins.map((coin) => {
        return (
          <TouchableWithoutFeedback
            key={coin.id}
            onPress={() => {
              // setTokenDetails([coin, tokenRates[idIndex]]);
              // nav();
            }}
          >
            <View style={styles.cardContainer}>
              <Card
                coin={coin}
              />
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    marginLeft: '9%',
    flexGrow: 1,
  },
  cardContainer: {
    width: '100%',
  },
});
