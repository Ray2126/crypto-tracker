import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import TokenDetailsContext from './utils/TokenDetailsContext';

const Stack = createStackNavigator();

export default function App() {
  const tokenDetailsHook = useState({});
  return (
    <TokenDetailsContext.Provider value={tokenDetailsHook}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Crypto Tracker">
          <Stack.Screen name="Crypto Tracker" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TokenDetailsContext.Provider>
  );
}
