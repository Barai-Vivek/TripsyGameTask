import React from 'react';
import {
  BackHandler,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import RNExitApp from 'react-native-exit-app';
import {Images} from '../asset';

const Header = () => {
  return (
    <View style={styles.topView}>
      <TouchableOpacity
        onPress={() => {
          Platform.OS === 'android'
            ? BackHandler.exitApp()
            : RNExitApp.exitApp();
        }}>
        <Image source={Images.icLeave} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.titleTextStyle}>Game play</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topView: {
    height: 40,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 10,
  },
  titleTextStyle: {
    fontSize: 20,
    color: 'white',
    marginStart: 10,
    flex: 1,
    textAlign: 'center',
  },
  image: {
    width: 24,
    height: 24,
    tintColor: 'red',
    resizeMode: 'contain', // You can use 'contain', 'stretch', etc. based on your preference
  },
});

export {Header};
