import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    NavigateToHomeScreen();
  }, [navigation]);

  const NavigateToHomeScreen = () => {
    setTimeout(function () {
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    }, 3000);
  };
  return (
    <View style={styles.container}>
      <View>
        <LottieView
          style={styles.lottieView}
          source={require('../../assets/splash.json')}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  lottieView: {
    width: '100%',
    height: Dimensions.get('screen').height * 0.6,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
