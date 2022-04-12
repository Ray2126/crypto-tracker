import React, { useContext } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import CoinCard from './CoinCard';
import CoinsContext from '../CoinsContext';

const CoinCardList = ({ onCardPress }) => {
  const coins = useContext(CoinsContext);
  return (
    <View style={styles.container}>
      {coins.map(coin => {
        return (
          <TouchableWithoutFeedback
            key={coin.id}
            onPress={() => onCardPress(coin)}
          >
            <View>
              <CoinCard coin={coin} />
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexGrow: 1,
  },
});

export default CoinCardList;