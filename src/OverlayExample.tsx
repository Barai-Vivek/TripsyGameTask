import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Images} from './asset';

const OverlayExample = () => {
  return (
    <ImageBackground source={Images.icBg} style={styles.backgroundImage}>
      {/* Your content goes here */}
      <View style={styles.container}>
        <Text style={styles.text}>Hello, World!</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'repeat', // or 'stretch'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default OverlayExample;
