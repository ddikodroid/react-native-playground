import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const DataDetailsScreen = ({route, navigation}) => {
  const {nama, usia, alamat} = route.params;
  return (
    <>
      <View style={s.flexArea}>
        <DataDiri nama={nama} usia={usia} alamat={alamat} />
      </View>
    </>
  );
};

export default DataDetailsScreen;

const DataDiri = (props) => {
  const {nama, usia, alamat} = props;
  // const {nama, usia, setNama} = props;
  return (
    <View>
      <Text>Nama: {nama}</Text>
      <Text>Umur: {usia} tahun</Text>
      <Text>Alamat: {alamat}</Text>
      {/* <TextInput onChangeText={setNama} value={nama} /> */}
    </View>
  );
};

const s = StyleSheet.create({
  flexArea: {
    width: Dimensions.get('window').width - 10,
    height: Dimensions.get('window').height / 10,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
