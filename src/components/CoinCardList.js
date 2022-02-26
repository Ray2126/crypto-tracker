import React, { useContext } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Card from './CoinCard';
import CoinsContext from '../CoinsContext';

const CoinCardList = ({ nav }) => {
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
            <View>
              <Card coin={coin} />
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default CoinCardList;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    display: 'flex',
    flexGrow: 1,
  },
});
