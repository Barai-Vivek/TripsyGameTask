import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OverlayExample = () => {
  return (
    <View style={styles.container}>
      {/* View 1 */}
      <View style={styles.view1}>
        <Text style={styles.text1}>View 1</Text>
      </View>

      {/* View 2 (Overlay) */}
      <View style={styles.view2}>
        <Text style={styles.text2}>Overlay View</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view1: {
    width: 200,
    height: 200,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  view2: {
    position: 'absolute',
    top: 50, // Adjust top position as needed
    left: 50, // Adjust left position as needed
    width: 350,
    height: 350,
    backgroundColor: 'rgba(255, 0, 0, 0.5)', // Semi-transparent red overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default OverlayExample;
