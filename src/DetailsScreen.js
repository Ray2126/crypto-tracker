import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import Navbar from './Navbar';
import DetailedCard from './DetailedCard';
import TokenDetailsContext from './utils/TokenDetailsContext';

const DetailsScreen = () => {
  const tokenDetails = useContext(TokenDetailsContext)[0];
  return (
    <View style={styles.container}>
      <Navbar />
      <DetailedCard info={tokenDetails[0]} data={tokenDetails[1]} />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
});
