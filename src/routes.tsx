import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {/* <AppStack.Screen name="" component={} /> */}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
