import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Navbar from '../components/Navbar';
import CardList from '../components/CoinCardList';
import colors from '../styles/colors';
import typography from '../styles/typography';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
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
  title: {
    ...typography.title,
    color: colors.primary,
  },
});
