import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Navbar from './Navbar';
import Title from './Title';
import CardList from './CardList';
import PeriodContext from './utils/PeriodContext';

const HomeScreen = ({ navigation }) => {
  const periodHook = useState('week');
  return (
    <View style={styles.container}>
      <Title />
      <PeriodContext.Provider value={periodHook}>
        <Navbar />
        <CardList />
      </PeriodContext.Provider>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
