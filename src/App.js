import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import PeriodContext from './utils/PeriodContext';
import TokenDetailsContext from './utils/TokenDetailsContext';

const Stack = createStackNavigator();

const App = () => {
  const tokenDetailsHook = useState({});
  const periodHook = useState('week');
  const scheme = useColorScheme();
  const lightTheme = {
    dark: false,
    colors: {
      background: '#fff',
      primary: '#495162',
      secondary: '#8A96AA',
    }
  }
  const darkTheme = {
    dark: true,
    colors: {
      background: '#000000',
      primary: '#F6F6F6',
      secondary: '#646464',
    }
  }

  return (
    <AppearanceProvider>
      <PeriodContext.Provider value={periodHook}>
        <TokenDetailsContext.Provider value={tokenDetailsHook}>
          <NavigationContainer theme={scheme === 'light' ? lightTheme : darkTheme}>
            <Stack.Navigator initialRouteName="Crypto Tracker" headerMode="none">
              <Stack.Screen name="Crypto Tracker" component={HomeScreen} />
              <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </TokenDetailsContext.Provider>
      </PeriodContext.Provider>
    </AppearanceProvider>
  );
}

export default App;
