import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import Card from './Card';
import PeriodContext from './utils/PeriodContext';
import getDataHook from './utils/getDataHook';

const CardList = () => {
  const period = useContext(PeriodContext)[0];
  const data = getDataHook(period);
  return (
    <View style={styles.container}>
      {data.tokenInfo.map((blockchain, i) => {
        return (
          <Card
            key={blockchain.id}
            info={blockchain}
            data={data.tokenRates[i]}
          />
        );
      })}
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
});
