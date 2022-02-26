import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import Navbar from '../components/Navbar';
import CardList from '../components/CardList';
import colors from '../styles/colors';
import typography from '../styles/typography';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: colors.primary }]}>Tracker</Text>
        </View>
        <Navbar />
        <CardList nav={() => navigation.navigate('Details')} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    paddingTop: '8%',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: '6%',
    justifyContent: 'center',
  },
  title: {
    ...typography.title,
  },
});
