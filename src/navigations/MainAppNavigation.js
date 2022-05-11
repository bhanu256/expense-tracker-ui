import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../screens/splash/SplashScreen';
import TabsNavigation from './TabsNavigation';

const Stack = createNativeStackNavigator();

const MainAppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="tabs" component={TabsNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNavigation;
