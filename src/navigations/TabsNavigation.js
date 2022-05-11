import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home/HomeScreen';

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
      <Tab.Screen name="home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
