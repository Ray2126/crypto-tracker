import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PeriodContext from '../PeriodContext';
import colors from '../styles/colors';
import typography from '../styles/typography';

const Navbar = () => {
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
    ...typography.body,
    color: '#8A96AA',
  },
  itemSelected: {
    ...typography.body,
    color: '#F15A29',
  },
});
