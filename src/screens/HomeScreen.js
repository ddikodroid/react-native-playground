import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import RegistrationScreen from './RegistrationScreen';

const HomeScreen = ({navigation}) => {
  const Move = () => {
    navigation.navigate('Top Tab Example');
  };
  const MoveToRegistration = () => {
    navigation.navigate('Registration');
  };
  const MoveToModal = () => {
    navigation.navigate('Latihan Modal');
  };
  const MoveToFlatList = () => {
    navigation.navigate('Latihan Flat List');
  };
  const MoveToFlatListUseEffect = () => {
    navigation.navigate('Latihan Flat List dan useEffect');
  };
  const MoveToRNP = () => {
    navigation.navigate('React Native Paper');
  };

  const fontStyling = {fontSize: 28, fontWeight: 'bold', color: 'white'};
  const fontStyling1 = {fontSize: 25, fontWeight: '500', color: 'white'};
  return (
    <ScrollView>
      <View style={s.uiHomeScreen}>
        <View style={[s.flexArea, {backgroundColor: 'midnightblue'}]}>
          {/* <Text>Home Screen</Text> */}
          <Text style={fontStyling}>🦄🔥Media Belajar😎🚀</Text>
        </View>
        <View style={[s.flexArea, {backgroundColor: 'midnightblue'}]}>
          <Text style={fontStyling1}>D i k o</Text>
        </View>
        <View style={[s.flexArea, {backgroundColor: 'midnightblue'}]}>
          <Button onPress={Move} title="Move to Details" />
        </View>
        <View style={[s.flexArea, {backgroundColor: 'midnightblue'}]}>
          <Button onPress={MoveToRegistration} title="Sign In" />
        </View>
        <View style={[s.flexArea, {backgroundColor: 'midnightblue'}]}>
          <Button onPress={MoveToModal} title="Latihan Modal" />
        </View>
        <View style={[s.flexArea, {backgroundColor: 'midnightblue'}]}>
          <Button onPress={MoveToFlatList} title="Latihan Flat List" />
        </View>
        <View style={[s.flexArea, {backgroundColor: 'midnightblue'}]}>
          <Button
            onPress={MoveToFlatListUseEffect}
            title="Latihan FlatList dan useEffect"
          />
        </View>
        <View style={[s.flexArea, {backgroundColor: 'midnightblue'}]}>
          <Button onPress={MoveToRNP} title="React Native Paper" />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const s = StyleSheet.create({
  uiHomeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  flexArea: {
    width: Dimensions.get('window').width - 10,
    height: Dimensions.get('window').height / 10,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
