import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigator = useNavigation();

  function navigateToHome() {
    navigator.navigate('tabs', {screen: 'home'});
  }

  useEffect(() => {
    navigateToHome();
  });

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
