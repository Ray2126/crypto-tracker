import React from 'react';
import { View, StyleSheet } from 'react-native';
import borders from '../styles/borders';

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
    ...borders.roundedBorder,
    width: '90%',
    marginTop: '5%',
  }
});