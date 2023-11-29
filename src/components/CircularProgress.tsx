import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';

const CircularProgress = (props: {initialTime: any; seconds: any}) => {
  const initialTime = props.initialTime;
  const seconds = props.seconds;

  console.log({seconds});

  // Calculate progress percentage
  const progress = ((initialTime - seconds) / initialTime) * 100;

  console.log({seconds, progress});

  return (
    <View style={styles.container}>
      <View style={styles.progressStyle}>
        <AnimatedProgressWheel
          size={46}
          width={6}
          showProgressLabel={false}
          backgroundColor="#09362408"
          color={'yellow'}
          progress={progress}
          delay={0}
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 23,
  },
  progressText: {
    color: 'white',
    fontSize: 12,
  },
});

export {CircularProgress};
