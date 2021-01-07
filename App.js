import React from 'react';
import About from './src/About';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

<<<<<<< HEAD
import HomeScreen from './src/components/HomeScreen';
import DetailsScreen from './src/components/DetailsScreen';
import RegistrationScreen from './src/components/RegistrationScreen';
import DataDetailsScreen from './src/components/DataDetailsScreen';
import ModalScreen from './src/components/ModalScreen';
import FlatListScreen from './src/components/FlatListScreen';
import NewsScreen from './src/components/NewsScreen';
import TestReactNativePaper from './src/components/TestReactNativePaper';
=======
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import DataDetailsScreen from './src/screens/DataDetailsScreen';
import ModalScreen from './src/screens/ModalScreen';
import FlatListScreen from './src/screens/FlatListScreen';
import NewsScreen from './src/screens/NewsScreen';
import SplashScreen from './src/screens/SplashScreen'
>>>>>>> 20d3de0ec6aadef22dd2f77aed5166cdaf6255cb
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Top Tab Example" component={DetailsScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
          <Stack.Screen name="Data Details" component={DataDetailsScreen} />
          <Stack.Screen name="Latihan Modal" component={ModalScreen} />
          <Stack.Screen name="Latihan Flat List" component={FlatListScreen} />
          <Stack.Screen
            name="React Native Paper"
            component={TestReactNativePaper}
          />
          <Stack.Screen
            name="Latihan Flat List dan useEffect"
            component={NewsScreen}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

export default App;
