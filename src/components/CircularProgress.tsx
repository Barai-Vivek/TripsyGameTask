import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import {moderateScale} from '../Constants';

const CircularProgress = (props: {initialTime: any; seconds: any}) => {
  const initialTime = props.initialTime;
  const seconds = props.seconds;

  // Calculate progress percentage
  const progress = ((initialTime - seconds) / initialTime) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.progressStyle}>
        <AnimatedProgressWheel
          size={moderateScale(46)}
          width={moderateScale(6)}
          rotation={'-90deg'}
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
    width: moderateScale(46),
    height: moderateScale(46),
  },
  progressStyle: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 23,
  },
  progressText: {
    color: 'white',
    fontSize: moderateScale(12),
  },
});

export {CircularProgress};
