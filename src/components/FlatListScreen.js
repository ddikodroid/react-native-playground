import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const FlatListScreen = () => {
  const [nama, setNama] = useState([
    {nama: 'Diko', key: '1'},
    {nama: 'Tito', key: '2'},
    {nama: 'Kholis', key: '3'},
    {nama: 'Andi', key: '4'},
    {nama: 'Ichsan', key: '5'},
    {nama: 'Ali', key: '6'},
    {nama: 'Albab', key: '7'},
    {nama: 'Robi', key: '8'},
    {nama: 'Hendi', key: '9'},
    {nama: 'Mujiono', key: '10'},
    {nama: 'Febri', key: '11'},
    {nama: 'Zaki', key: '12'},
    {nama: 'Evan', key: '13'},
    {nama: 'Nita', key: '14'},
  ]);
  const fontStyling = {fontSize: 27, fontWeight: 'bold', color: 'white'};
  return (
    <View style={s.flatListHomeScreen}>
      {/* flatlist berguna saat pagination supaya memori yang digunakan tidak banyak  */}
      <FlatList
        numColumns="2"
        data={ßnama}
        renderItem={({item}) => (
          <View style={[s.flexArea, {backgroundColor: 'midnightblue'}]}>
            <Text style={fontStyling}>{item.nama}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FlatListScreen;

const s = StyleSheet.create({
  flatListHomeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  flexArea: {
    width: 170,
    height: 50,
    margin: 15,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
