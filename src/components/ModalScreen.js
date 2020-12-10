import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Modal, Alert} from 'react-native';

const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleVisible = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={s.modalHomeScreen}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={[s.flexArea, {backgroundColor: 'pink'}]}>
          <Text>Ini modal</Text>
          <Button
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            title="Klik Tombol Ini"
          />
        </View>
      </Modal>
      <View style={[s.flexArea, {backgroundColor: '#f8bbd0'}]}>
        <Button
          onPress={() => {
            setModalVisible(true);
          }}
          title="Klik Tombol Ini"
        />
      </View>
    </View>
  );
};

export default ModalScreen;

const s = StyleSheet.create({
  modalHomeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  modelVisible: {
    margin: 20,
    backgroundColor: '#f8cdd0',
    alignItems: 'center',
  },
  flexArea: {
    width: 300,
    height: 300,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
  },
});
