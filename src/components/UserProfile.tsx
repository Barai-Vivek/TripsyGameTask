import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Images} from '../asset';
import {moderateScale} from '../Constants';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={Images.icUser} style={styles.roundedImage} />
      <View style={styles.overlayContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.overlayText}>
          Username
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(46),
    height: moderateScale(46),
  },
  roundedImage: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(23),
    resizeMode: 'cover',
  },
  overlayContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: moderateScale(3),
    paddingHorizontal: moderateScale(6),
    borderRadius: moderateScale(3),
  },
  overlayText: {
    color: 'white',
    fontSize: moderateScale(8),
    fontWeight: 'bold',
  },
});

export {UserProfile};
