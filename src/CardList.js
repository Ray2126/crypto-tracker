import React, { useContext } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Card from './Card';
import PeriodContext from './utils/PeriodContext';
import TokenDetailsContext from './utils/TokenDetailsContext';
import getDataHook from './utils/getDataHook';

const CardList = ({ nav }) => {
  const period = useContext(PeriodContext)[0];
  const setTokenDetails = useContext(TokenDetailsContext)[1];
  const { tokenInfo, tokenRates } = getDataHook(period);
  return (
    <View style={styles.container}>
      {tokenInfo.map((blockchain) => {
        //Find the data id that matches with the blockchain
        const idToFind = blockchain.id;
        const arr = tokenRates.map((e) => {
          return e.id;
        });
        const idIndex = arr.lastIndexOf(idToFind);
        return (
          <TouchableWithoutFeedback
            key={blockchain.id}
            onPress={() => {
              setTokenDetails([blockchain, tokenRates[idIndex]]);
              nav();
            }}
          >
            <View style={styles.cardContainer}>
              <Card

                info={blockchain}
                data={tokenRates[idIndex]}
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
  },
  cardContainer: {
    width: '100%',
  },
});
