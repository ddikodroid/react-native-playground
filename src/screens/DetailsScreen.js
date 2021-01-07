import React from 'react';
import {View, Button, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen';
import PlaygroundScreen from './PlaygroundScreen';

const Tab = createMaterialTopTabNavigator();

const DetailsScreen = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Playground" component={PlaygroundScreen} />
      </Tab.Navigator>
    </>
  );
};

export default DetailsScreen;

const s = StyleSheet.create({
  uiDetails: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
});
