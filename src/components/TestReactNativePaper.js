import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
const TestReactNativePaper = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.TextInput} mode="outlined" label="Username" />
      <TextInput
        style={styles.TextInput}
        mode="outlined"
        label="Password"
        primary
      />
    </View>
  );
};

export default TestReactNativePaper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 20,
    padding: 10,
    marginVertical: 20,
  },
  TextInput: {
    borderColor: '#039be5',
  },
});
