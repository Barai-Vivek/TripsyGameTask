import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';

const CircularProgress = (props: {initialTime: any; seconds: any}) => {
  const initialTime = props.initialTime;
  const seconds = props.seconds;

  // Calculate progress percentage
  const progress = ((initialTime - seconds) / initialTime) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.progressStyle}>
        <AnimatedProgressWheel
          size={46}
          width={6}
          showProgressLabel={false}
          rotation={'-90deg'}
          backgroundColor="green"
          color={'yellow'}
          progress={progress}
        />
      </View>
      <Text style={styles.progressText}>{seconds}</Text>
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
  progressStyle: {
    position: 'absolute',
  },
  progressText: {color: 'white', fontSize: 12},
});

export {CircularProgress};
