import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navbar from './Navbar';
import Title from './Title';
import CardList from './CardList';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Navbar />
      <CardList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
