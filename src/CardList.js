import React, { useContext } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Card from './Card';
import PeriodContext from './utils/PeriodContext';
import getDataHook from './utils/getDataHook';

const CardList = ({ nav }) => {
  const period = useContext(PeriodContext)[0];
  const data = getDataHook(period);
  return (
    <View style={styles.container}>
      {data.tokenInfo.map((blockchain, i) => {
        //Find the data id that matches with the blockchain
        const idToFind = blockchain.id;
        const arr = data.tokenRates.map((e) => {
          return e.id;
        });
        const idIndex = arr.lastIndexOf(idToFind);
        return (
          <TouchableWithoutFeedback onPress={() => nav()}>
            <View style={styles.cardContainer}>
              <Card
                key={blockchain.id}
                info={blockchain}
                data={data.tokenRates[idIndex]}
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
