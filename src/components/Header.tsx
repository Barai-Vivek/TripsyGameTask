import React, {useEffect} from 'react';
import {
  BackHandler,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import RNExitApp from 'react-native-exit-app';
import {Images} from '../asset';
import {moderateScale} from '../Constants';

const Header = () => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const handleBackButtonClick = () => {
    handleExitPress();
    return true;
  };

  const handleExitPress = () => {
    RNExitApp.exitApp();
  };

  return (
    <View style={styles.topView}>
      <TouchableOpacity onPress={handleExitPress}>
        <Image source={Images.icLeave} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.titleTextStyle}>Game play</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topView: {
    height: moderateScale(40),
    flexDirection: 'row',
    paddingHorizontal: moderateScale(10),
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: moderateScale(20),
    marginTop: moderateScale(10),
    marginHorizontal: moderateScale(20),
  },
  titleTextStyle: {
    fontSize: moderateScale(18),
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  image: {
    width: moderateScale(24),
    height: moderateScale(24),
    tintColor: 'red',
    resizeMode: 'contain',
  },
});

export {Header};
