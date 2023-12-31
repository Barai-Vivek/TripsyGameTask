import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale} from '../Constants';
import {FooterProps} from './types';

const Footer = ({showDiscardBtn, discardSelection, myTurn}: FooterProps) => {
  if (!myTurn) {
    return <View style={styles.bottomView} />;
  }

  const textToShow = showDiscardBtn ? 'Discard' : 'Sort';

  const handlePress = () => {
    if (textToShow === 'Discard') {
      discardSelection('');
    }
  };

  return (
    <View style={styles.bottomView}>
      <TouchableOpacity style={styles.btnView} onPress={handlePress}>
        <Text style={styles.btnText}>{textToShow}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    maxWidth: moderateScale(150),
    minHeight: moderateScale(40),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: moderateScale(20),
    alignItems: 'flex-end',
  },
  btnText: {
    fontSize: moderateScale(14),
    color: 'black',
  },
  btnView: {
    borderRadius: moderateScale(20),
    backgroundColor: '#00FF00',
    paddingVertical: moderateScale(4),
    paddingHorizontal: moderateScale(16),
  },
});

export {Footer};
