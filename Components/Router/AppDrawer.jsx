import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Calculator } from '../Calculator';

const Stack = createStackNavigator();

const AppDrawer = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculator">
        <Stack.Screen name="Calculator" options={{ headerShown: false }} component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppDrawer;
