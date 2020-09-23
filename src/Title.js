import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tracker</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    marginBottom: '5%',
  },
  title: {
    textAlign: 'center',
    color: '#495162',
    fontSize: 18,
    lineHeight: 21,
  },
});
