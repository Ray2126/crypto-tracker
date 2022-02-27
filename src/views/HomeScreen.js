import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import Navbar from '../components/Navbar';
import CardList from '../components/CoinCardList';
import colors from '../styles/colors';
import typography from '../styles/typography';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tracker</Text>
        </View>
        <Navbar />
        <CardList onCardPress={selectedCoin => navigation.navigate('Details', { selectedCoin })} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: '8%',
    backgroundColor: colors.background,
  },
  titleContainer: {
    marginBottom: '3%',
    alignItems: 'center',
  },
  title: {
    ...typography.title,
    color: colors.primary,
  },
});
