import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import Navbar from './Navbar';
import Title from './Title';
import CardList from './CardList';
import PeriodContext from './utils/PeriodContext';

const HomeScreen = ({ navigation }) => {
  const periodHook = useState('week');
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={styles.container}>
        <Title />
        <PeriodContext.Provider value={periodHook}>
          <Navbar />
          <CardList nav={() => navigation.navigate('Details')} />
        </PeriodContext.Provider>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
});
