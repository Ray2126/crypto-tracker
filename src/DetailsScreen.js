import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
