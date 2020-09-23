import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const navItems = [
  { title: 'all' },
  { title: 'year' },
  { title: 'month' },
  { title: 'week' },
  { title: 'day' },
];

const Navbar = () => {
  return (
    <View style={styles.container}>
      {navItems.map((navItem) => {
        return (
          <TouchableHighlight onPress={() => console.log(navItem.title)}>
            <View>
              <Text style={styles.item}>{navItem.title}</Text>
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
