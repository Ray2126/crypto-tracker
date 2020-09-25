import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, StatusBar, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Navbar from './Navbar';
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
        <Ionicons
          name="ios-search"
          size={25}
          color="black"
          style={styles.searchButton}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tracker</Text>
        </View>
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
    paddingTop: '8%',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '2%',
    width: '100%',
    marginBottom: '4.5%',
    justifyContent: 'center',
  },
  searchButton: {
    marginLeft: '85%',
    transform: [{ translateY: 25 }],
  },
  title: {
    color: '#495162',
    fontSize: 18,
    lineHeight: 21,
  },
});
