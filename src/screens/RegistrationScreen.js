import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, Dimensions} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import DataDetailsScreen from './DataDetailsScreen';
import styled, {css} from 'styled-components/native';
const RegistrationScreen = ({navigation}) => {
  const Move = () => {
    navigation.navigate('Data Details', {nama, usia, alamat});
  };

  const [nama, setNama] = useState();
  const [usia, setUsia] = useState();
  const [alamat, setAlamat] = useState();

  return (
    <>
      <View>
        <Text>Input Nama: </Text>
        <TextInput
          style={s.textInput}
          value={nama}
          onChangeText={(txt) => setNama(txt)}
        />
        <Text>Input Usia: </Text>
        <TextInput
          style={s.textInput}
          value={usia}
          onChangeText={(txt) => setUsia(txt)}
        />
        <Text>Input Alamat: </Text>
        <TextInput
          style={s.textInput}
          value={alamat}
          onChangeText={(txt) => setAlamat(txt)}
        />
      </View>
      <View style={s.flexArea}>
        <Button onPress={Move} title="Register" />
        <PressableButton title="Ini Styled Button" primary />
      </View>
    </>
  );
};

export default RegistrationScreen;

const s = StyleSheet.create({
  flexArea: {
    width: Dimensions.get('window').width - 10,
    height: Dimensions.get('window').height / 10,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textInput: {
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    borderBottomColor: '#000',
  },
  flexAreaBody: {
    width: Dimensions.get('window').width - 10,
    height: Dimensions.get('window').height / 8,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 10px;
  width: 120px;
  height: 40px;
  padding: 2px;
  border-radius: 10px;
  background-color: transparent;
  ${(props) =>
    props.primary &&
    css`
      background: #049532;
      color: black;
    `}
`;

const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;
const PressableButton = ({onPress, title}) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);
