import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const navItems = ['all', 'year', 'month', 'week', 'day'];

const Navbar = () => {
  return (
    <View style={styles.container}>
      {navItems.map((title) => {
        return (
          <TouchableHighlight key={title} onPress={() => console.log(title)}>
            <View>
              <Text style={styles.item}>{title}</Text>
            </View>
          </TouchableHighlight>
        );
      })}
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  item: {
    fontSize: 15,
    lineHeight: 21,
    color: '#8A96AA',
  },
});
