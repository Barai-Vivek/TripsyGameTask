import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale} from '../Constants';
import CircularProgress from 'react-native-circular-progress-indicator';

const CircularProgressBar = ({
  initialTime,
  seconds,
}: {
  initialTime: number;
  seconds: number;
}) => {
  // Calculate progress percentage
  const progress = useMemo(
    () => ((initialTime - seconds) / initialTime) * 100,
    [initialTime, seconds],
  );

  const activeStrokeColor = useMemo(
    () => (seconds > 5 ? 'yellow' : 'tomato'),
    [seconds],
  );

  return (
    <View style={styles.container}>
      <View style={styles.progressStyle}>
        <CircularProgress
          radius={moderateScale(23)}
          value={progress}
          progressValueStyle={styles.progressValueText}
          activeStrokeColor={activeStrokeColor}
          inActiveStrokeOpacity={0.2}
          duration={0}
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
  progressValueText: {
    color: 'transparent',
  },
});

export {CircularProgressBar};
