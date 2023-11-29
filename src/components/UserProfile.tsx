import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Images} from '../asset';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={Images.icBg} style={styles.roundedImage} />
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
    width: 46,
    height: 46,
  },
  roundedImage: {
    width: 46,
    height: 46,
    borderRadius: 23, // Half of the width/height to make it rounded
    resizeMode: 'cover',
  },
  overlayContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 3,
  },
  overlayText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
  },
});

export default UserProfile;
