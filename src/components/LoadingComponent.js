import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View, Modal} from 'react-native';

const LoadingComponent = () => {
  return (
    <Modal
      transparent
      animationType="none"
      visible={true}
      onRequestClose={() => null}>
      <View style={styles.view}>
        <ActivityIndicator size="large" color="white" />
      </View>
    </Modal>
  );
};

export default LoadingComponent;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(80,80,0,0.5)',
  },
});
