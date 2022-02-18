import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardBase = ({ height, children }) => {
  return (
    <View
      style={[styles.container, { height: height }]}
    >
      {children}
    </View >
  );
};

export default CardBase;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#F6F6F6',
    borderRadius: 15,
    marginTop: '5%',
  }
});