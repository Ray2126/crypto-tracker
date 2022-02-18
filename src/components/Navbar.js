import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import PeriodContext from '../PeriodContext';

const Navbar = () => {
  const { colors } = useTheme();
  const [period, setPeriod] = useContext(PeriodContext);
  const navItems = ['all', 'year', 'month', 'week', 'day'];
  return (
    <View style={styles.container}>
      {navItems.map((title) => {
        return (
          <TouchableOpacity
            key={title}
            onPress={() => setPeriod(title)}
          >
            <View>
              <Text
                style={period === title ? styles.itemSelected : [styles.item, { color: colors.secondary }]}
              >
                {title}
              </Text>
            </View>
          </TouchableOpacity>
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
  itemSelected: {
    fontSize: 15,
    lineHeight: 21,
    color: '#F15A29',
  },
});
