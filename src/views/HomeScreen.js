import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import Navbar from '../components/Navbar';
import CardList from '../components/CardList';

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Ionicons
          name="ios-search"
          size={25}
          color={colors.primary}
          style={styles.searchButton}
        />
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
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10%',
  },
  container: {
    flex: 1,
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
  searchButton: {
    marginLeft: '85%',
    transform: [{ translateY: 25 }],
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
  },
});
