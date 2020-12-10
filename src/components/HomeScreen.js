import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import RegistrationScreen from './RegistrationScreen'

const HomeScreen = ({navigation}) => {
  const Move = () => {
    navigation.navigate('Top Tab Example');
  };
  const MoveToRegistration = () => {
    navigation.navigate('Registration')
  }
  const MoveToModal = () => {
    navigation.navigate('Latihan Modal')
  }
  const MoveToFlatList = () => {
    navigation.navigate('Latihan Flat List')
  }

  const fontStyling = {fontSize: 27, fontWeight: 'bold'};
  return (
    <ScrollView>
      <View style={s.uiHomeScreen}>
        <View style={[s.flexArea, {backgroundColor: 'powderblue'}]}>
          {/* <Text>Home Screen</Text> */}
          <Text style={fontStyling}>D</Text>
        </View>
        <View style={[s.flexArea, {backgroundColor: 'skyblue'}]}>
          <Text style={fontStyling}>I</Text>
        </View>
        <View style={[s.flexArea, {backgroundColor: 'steelblue'}]}>
          <Text style={fontStyling}>K</Text>
        </View>
        <View style={[s.flexArea, {backgroundColor: 'royalblue'}]}>
          <Text style={fontStyling}>O</Text>
        </View>
        <View style={[s.flexArea, {backgroundColor: 'midnightblue'}]}>
          <Button onPress={Move} title="Move to Details" />
        </View>
        <View style={[s.flexArea, {backgroundColor: 'midnightblue'}]}>
          <Button onPress={MoveToRegistration} title="Sign In"/>
        </View>
        <View style={[s.flexArea, {backgroundColor: 'midnightblue'}]}>
          <Button onPress={MoveToModal} title="Latihan Modal"/>
        </View>
        <View style={[s.flexArea, {backgroundColor: 'midnightblue'}]}>
          <Button onPress={MoveToFlatList} title="Latihan Flat List"/>
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
    width: Dimensions.get('window').width-10,
    height: Dimensions.get('window').height/10,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
