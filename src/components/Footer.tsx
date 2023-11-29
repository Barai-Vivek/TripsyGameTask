import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale} from '../Constants';
import {FooterProps} from './types';

const Footer = ({showDiscardBtn, discardSelection}: FooterProps) => {
  const textToShow = showDiscardBtn ? 'Discard' : 'Sort';

  return (
    <View style={styles.bottomView}>
      <TouchableOpacity
        style={styles.btnView}
        onPress={() => textToShow === 'Discard' && discardSelection('')}>
        <Text style={styles.btnText}>{textToShow}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    maxWidth: moderateScale(150),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: moderateScale(20),
    alignItems: 'flex-end',
  },
  btnText: {
    fontSize: moderateScale(16),
    color: 'black',
  },
  btnView: {
    borderRadius: moderateScale(20),
    backgroundColor: '#00FF00',
    paddingVertical: moderateScale(6),
    paddingHorizontal: moderateScale(18),
  },
});

export {Footer};
