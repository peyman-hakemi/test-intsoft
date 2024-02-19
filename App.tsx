/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Text>Your Stack of screens</Text>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
