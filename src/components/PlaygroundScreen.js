import React, {useState} from 'react';
import {View, Button, Text, StyleSheet, Dimensions} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {set} from 'react-native-reanimated';

const PlaygroundScreen = () => {
  const [nama, setNama] = useState('Diko');
  const [usia, setUsia] = useState();
  const [pwd, setPwd] = useState('uwu');
  return (
    <ScrollView>
      <View style={s.uiPlaygroundScreen}>
        <View style={[s.flexArea, {backgroundColor: 'steelblue'}]}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            Playground
          </Text>
        </View>
        <View style={[s.flexArea, {backgroundColor: 'skyblue'}]}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            Isi field di bawah ini.
          </Text>
        </View>
        <View style={[s.flexAreaBody, {backgroundColor: 'skyblue'}]}>
          <View style={{flexDirection: 'row'}}>
            <Text>Input Nama: </Text>
            <TextInput
              style={s.textInput}
              value={nama}
              onChangeText={(txt) => setNama(txt)}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Input Usia: </Text>
            <TextInput
              style={s.textInput}
              value={usia}
              onChangeText={(txt) => setUsia(txt)}
            />
            <Text> tahun</Text>
          </View>
        </View>
        <View style={[s.flexArea, {backgroundColor: 'powderblue'}]}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            Field di bawah ini akan terisi secara otomatis.
          </Text>
        </View>
        <View style={[s.flexAreaBody, {backgroundColor: 'powderblue'}]}>
          <Texts nama={nama} usia={usia} />
        </View>
        {/* <View style={s.flexArea}>
        <Text>Keterangan</Text>
        <Texts nama={nama} usia={usia} setNama={(text) => setNama(text)} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Input Nama: </Text>
        <TextInput
          style={s.textInput}
          value={nama}
          onChangeText={(txt) => setNama(txt)}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Input Usia: </Text>
        <TextInput
          style={s.textInput}
          value={usia}
          onChangeText={(txt) => setUsia(txt)}
        />
        <Text> tahun</Text>
      </View> */}
      </View>
    </ScrollView>
  );
};

const Texts = (props) => {
  //const {nama, usia} = props;
  const {nama, usia, setNama} = props;
  return (
    <View>
      <Text>Nama: {nama}</Text>
      <Text>Umur: {usia} tahun</Text>
      {/* <TextInput onChangeText={setNama} value={nama} /> */}
    </View>
  );
};

const s = StyleSheet.create({
  uiPlaygroundScreen: {
    //flex: 1,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexArea: {
    width: Dimensions.get('window').width - 10,
    height: 50,
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

export default PlaygroundScreen;
