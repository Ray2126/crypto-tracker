import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, StatusBar } from 'react-native';

import Navbar from './Navbar';
import Title from './Title';
import CardList from './CardList';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Title />
        <Navbar />
        <CardList nav={() => navigation.navigate('Details')} />
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
