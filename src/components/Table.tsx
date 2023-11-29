import React from 'react';
import {View, Image, Text, StyleSheet, ImageSourcePropType} from 'react-native';
import CardDeck from './CardDeck';
import {CARD_HEIGHT, SMALL_CARD_HEIGHT, SMALL_CARD_WIDTH} from '../Constants';
import {Images} from '../asset';

const Table = () => {
  return (
    <View style={styles.centerView}>
      <View style={styles.table}>
        <Text style={styles.textStyle}>Opponent</Text>
        <View style={styles.opponentUserDeck}>
          <View style={styles.opponentUserLeftArea}>
            {renderCard(Images.icClub2, -12, '90deg')}
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
          <CardDeck />
        </View>
      </View>
    </View>
  );
};

const renderCard = (
  image: ImageSourcePropType,
  marginLeft = -12,
  rotate = '0deg',
) => (
  <View style={[styles.cardContainer, {marginLeft, transform: [{rotate}]}]}>
    <Image source={image} style={styles.cardImage} />
  </View>
);

const styles = StyleSheet.create({
  centerView: {
    top: 20,
    bottom: 0,
    start: 20,
    right: 20,
    width: '90%',
    flex: 1,
    backgroundColor: 'green',
    borderRadius: 150,
    borderWidth: 12,
    borderColor: '#093624',
    shadowColor: '#00FF00',
    elevation: 20,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 20,
    position: 'absolute',
  },
  textStyle: {
    fontSize: 16,
    color: 'black',
  },
  table: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsDeck: {
    height: CARD_HEIGHT,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  opponentUserDeck: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 76,
  },
  opponentUserLeftArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  opponentUserCenterArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  opponentUserRightArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showHereTxt: {
    fontSize: 9,
    color: 'black',
    margin: 4,
    textAlign: 'center',
  },
  showHere: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SMALL_CARD_WIDTH,
    height: SMALL_CARD_HEIGHT,
    borderColor: 'black',
    borderWidth: 0.7,
    borderRadius: 4,
  },
  cardContainer: {
    width: SMALL_CARD_WIDTH,
    height: SMALL_CARD_HEIGHT,
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
