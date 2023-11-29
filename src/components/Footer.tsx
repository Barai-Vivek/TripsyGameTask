import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.bottomView}>
      <TouchableOpacity style={styles.btnView}>
        <Text style={styles.btnText}>Sort</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    color: 'black',
  },
  btnView: {
    borderRadius: 20,
    backgroundColor: '#00FF00',
    paddingVertical: 6,
    paddingHorizontal: 18,
  },
});

export {Footer};
