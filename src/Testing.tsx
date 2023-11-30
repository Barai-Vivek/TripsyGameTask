import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const Testing = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress update over time (0% to 100%)
    const intervalId = setInterval(() => {
      setProgress(prevProgress => (prevProgress < 1 ? prevProgress + 0.01 : 1));
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{progress}</Text>
      <CircularProgress
        radius={40}
        value={progress}
        titleColor="#222dfd"
        titleFontSize={20}
        valueSuffix={'%'}
        activeStrokeColor={'tomato'}
        inActiveStrokeOpacity={0.2}
        duration={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Testing;
