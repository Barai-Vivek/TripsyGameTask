import React from 'react';
import {View, Image, Text, StyleSheet, ImageSourcePropType} from 'react-native';
import CardDeck from './CardDeck';
import {
  CARD_HEIGHT,
  SMALL_CARD_HEIGHT,
  SMALL_CARD_WIDTH,
  moderateScale,
  screenWidth,
} from '../Constants';
import {Images} from '../asset';
import {CardSelectionProps} from './types';

const Table = ({onSelect, passedData}: CardSelectionProps) => {
  return (
    <View style={styles.centerView}>
      <View style={styles.table}>
        <View style={styles.opponentUserDeck}>
          <View style={styles.opponentUserLeftArea}>
            {renderCard(Images.icClub2, moderateScale(-12), '90deg')}
            {renderCard(Images.icCloseDeck)}
          </View>
          <View style={styles.opponentUserCenterArea}>
            {renderCard(Images.icJoker, 0)}
          </View>
          <View style={styles.opponentUserRightArea}>
            <View style={styles.showHere}>
              <Text style={styles.showHereTxt}>SHOW HERE</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardsDeck}>
          <CardDeck onSelect={onSelect} passedData={passedData} />
        </View>
      </View>
    </View>
  );
};

const renderCard = (
  image: ImageSourcePropType,
  marginLeft = moderateScale(-12),
  rotate = '0deg',
) => (
  <View style={[styles.cardContainer, {marginLeft, transform: [{rotate}]}]}>
    <Image source={image} style={styles.cardImage} />
  </View>
);

const styles = StyleSheet.create({
  centerView: {
    marginTop: moderateScale(10),
    width: '86%',
    height: '94%',
    backgroundColor: 'green',
    borderRadius: screenWidth - 100 / 2,
    borderWidth: moderateScale(12),
    borderColor: '#093624',
    alignSelf: 'center',
    position: 'absolute',
  },
  textStyle: {
    fontSize: moderateScale(16),
    color: 'black',
  },
  table: {
    flex: 1,
    margin: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsDeck: {
    height: moderateScale(CARD_HEIGHT),
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: moderateScale(20),
  },
  opponentUserDeck: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(76),
  },
  opponentUserLeftArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: moderateScale(26),
  },
  opponentUserCenterArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: moderateScale(26),
  },
  opponentUserRightArea: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(26),
  },
  showHereTxt: {
    fontSize: 9,
    color: 'black',
    margin: moderateScale(4),
    textAlign: 'center',
  },
  showHere: {
    justifyContent: 'center',
    alignItems: 'center',
    width: moderateScale(SMALL_CARD_WIDTH),
    height: moderateScale(SMALL_CARD_HEIGHT),
    borderColor: 'black',
    borderWidth: 0.7,
    borderRadius: 4,
  },
  cardContainer: {
    width: moderateScale(SMALL_CARD_WIDTH),
    height: moderateScale(SMALL_CARD_HEIGHT),
    borderRadius: 6,
    overflow: 'hidden',
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export {Table};
