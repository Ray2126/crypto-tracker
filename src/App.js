import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import PeriodContext from './utils/PeriodContext';
import TokenDetailsContext from './utils/TokenDetailsContext';

const Stack = createStackNavigator();

const App = () => {
  const tokenDetailsHook = useState({});
  const periodHook = useState('week');

  return (
    <PeriodContext.Provider value={periodHook}>
      <TokenDetailsContext.Provider value={tokenDetailsHook}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Crypto Tracker" headerMode="none">
            <Stack.Screen name="Crypto Tracker" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </TokenDetailsContext.Provider>
    </PeriodContext.Provider>
  );
}

export default App;
