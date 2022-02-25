import React, { useState, useEffect } from 'react';
import { Appearance } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './views/HomeScreen';
import DetailsScreen from './views/DetailsScreen';
import PeriodContext from './PeriodContext';
import CoinsContext from './CoinsContext';
import coinGeckoClient from './models/coinGeckoClient';

const Stack = createStackNavigator();

const App = () => {
  const [ coins, setCoins ] = useState({});
  const [ isLoading, setLoading ] = useState(true);
  useEffect(async () => {
    setCoins(await coinGeckoClient.listCoinMarketData({
      currency: 'usd',
      limit: '10',
      pageNumber: '1',
    }));
    setLoading(false);
  }, []);
  const period = useState('week');
  const scheme = Appearance.getColorScheme();
  const lightTheme = {
    dark: false,
    colors: {
      background: '#fff',
      primary: '#495162',
      secondary: '#8A96AA',
    }
  };
  const darkTheme = {
    dark: true,
    colors: {
      background: '#000000',
      primary: '#F6F6F6',
      secondary: '#646464',
    }
  };

  return !isLoading ? (
    <PeriodContext.Provider value={period}>
      <CoinsContext.Provider value={coins}>
        <NavigationContainer theme={scheme === 'light' ? lightTheme : darkTheme}>
          <Stack.Navigator initialRouteName="Crypto Tracker" headerMode="none">
            <Stack.Screen name="Crypto Tracker" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </CoinsContext.Provider>
    </PeriodContext.Provider>
  ) : <div>Loading...</div>;
};

export default App;
