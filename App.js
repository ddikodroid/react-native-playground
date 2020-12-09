import React from 'react';
import About from './src/About';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/components/HomeScreen';
import DetailsScreen from './src/components/DetailsScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Top Tab Example" component={DetailsScreen}/>
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

export default App;
