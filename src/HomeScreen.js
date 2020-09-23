import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Navbar from './Navbar';
import Title from './Title';
import CardList from './CardList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Title />
      <Navbar />
      <CardList />
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
