import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PeriodContext from '../PeriodContext';
import colors from '../styles/colors';
import typography from '../styles/typography';

const Navbar = () => {
  const [ period, setPeriod ] = useContext(PeriodContext);
  const navItems = [ 'day', 'week', 'month', 'year' ];
  return (
    <View style={styles.container}>
      {navItems.map(navItem => {
        return (
          <TouchableOpacity
            style={styles.navItemContainer}
            key={navItem}
            onPress={() => setPeriod(navItem)}
          >
            <View>
              <Text style={period === navItem ? styles.selectedNavItem : styles.navItem}>
                {navItem}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  navItem: {
    ...typography.body,
    color: colors.secondary,
  },
  selectedNavItem: {
    ...typography.body,
    color: colors.accent,
  },
  navItemContainer: {
    paddingHorizontal: '3%',
    paddingVertical: '5%',
  },
});

export default Navbar;