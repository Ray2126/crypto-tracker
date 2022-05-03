import 'intl';
import { Platform } from 'react-native';

if (Platform.OS === 'android') {
  // See https://github.com/expo/expo/issues/6536 for this issue.
  if (typeof Intl.__disableRegExpRestore === 'function') {
    Intl.__disableRegExpRestore();
  }
}
import 'intl/locale-data/jsonp/en';

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './views/HomeScreen';
import DetailsScreen from './views/DetailsScreen';
import PeriodContext from './PeriodContext';
import CoinsContext from './CoinsContext';
import coinGeckoClient from './models/coinGeckoClient';
import colors from './styles/colors';

const Stack = createStackNavigator();

const App = () => {
  const [ coins, setCoins ] = useState({});
  const [ isLoading, setLoading ] = useState(true);
  useEffect(() => {
    (async () => {
      setCoins(await coinGeckoClient.listCoinMarketData({
        currency: 'usd',
        limit: '10',
        pageNumber: '1',
      }));
      setLoading(false);
    })();
  }, []);
  const period = useState('week');

  return !isLoading ? (
    <PeriodContext.Provider value={period}>
      <CoinsContext.Provider value={coins}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Crypto Tracker" headerShown={true}>
            <Stack.Screen
              name="Home Screen"
              component={HomeScreen}
              options={{
                headerStyle: styles.headerStyles,
                headerTintColor: colors.primary,
              }}
            />
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={{
                headerStyle: styles.headerStyles,
                headerTintColor: colors.primary,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CoinsContext.Provider>
    </PeriodContext.Provider>
  ) : <Text>Loading...</Text>;
};

const styles = StyleSheet.create({
  headerStyles: {
    backgroundColor: colors.background,
  },
});

export default App;