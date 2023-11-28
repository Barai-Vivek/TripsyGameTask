/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  BackHandler,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Images} from './src/asset';
import RNExitApp from 'react-native-exit-app';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />

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

      <View style={[styles.centerView]}>
        <View style={styles.table}>
          <Text style={styles.textStyle}>Table</Text>
        </View>
      </View>

      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.btnView}>
          <Text style={styles.btnText}>Sort</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  topView: {
    height: 56,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  bottomView: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  centerView: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 150,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
    marginStart: 10,
  },
  titleTextStyle: {
    fontSize: 20,
    color: 'white',
    marginStart: 10,
    flex: 1,
    textAlign: 'center',
  },
  table: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
    tintColor: 'white',
    resizeMode: 'contain', // You can use 'contain', 'stretch', etc. based on your preference
  },
  btnText: {
    fontSize: 16,
    color: 'black',
  },
  btnView: {
    borderRadius: 20,
    backgroundColor: '#00FF00',
    paddingVertical: 6,
    paddingHorizontal: 18,
  },
});

export default App;
