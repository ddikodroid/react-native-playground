import React from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

const About = () => {
  return (
    <>
      <View>
        <Text>This is about screen.</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});

export default About;