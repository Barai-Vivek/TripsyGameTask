import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CardDeck from './CardDeck';
import {CARD_HEIGHT, SMALL_CARD_HEIGHT, SMALL_CARD_WIDTH} from '../Constants';
import {Images} from '../asset';

const Table = () => {
  return (
    <View style={[styles.centerView]}>
      <View style={styles.table}>
        <Text style={styles.textStyle}>Opponent</Text>
        <View style={styles.opponentUserDeck}>
          <View style={styles.opponentUserLeftArea}>
            <View
              style={[styles.cardContainer, {transform: [{rotate: '90deg'}]}]}>
              <Image source={Images.icDeck} style={styles.cardImage} />
            </View>
            <View style={styles.cardContainer}>
              <Image source={Images.icDeck} style={styles.cardImage} />
            </View>
          </View>
          <View style={styles.opponentUserCenterArea}>
            <View style={[styles.cardContainer, {marginLeft: 0}]}>
              <Image source={Images.icDeck} style={styles.cardImage} />
            </View>
          </View>
          <View style={styles.opponentUserRightArea}>
            <View style={styles.showHere}>
              <Text style={styles.showHereTxt}>Show here</Text>
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

const styles = StyleSheet.create({
  centerView: {
    flex: 5,
    backgroundColor: 'green',
    borderRadius: 150,
    borderWidth: 12,
    borderColor: '#093624',
    marginHorizontal: 40,
    shadowColor: '#00FF00',
    elevation: 20,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 20,
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
    fontSize: 10,
    color: 'black',
    margin: 4,
  },
  showHere: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SMALL_CARD_WIDTH,
    height: SMALL_CARD_HEIGHT,
    borderColor: 'black',
    borderWidth: 0.7,
  },
  cardContainer: {
    width: SMALL_CARD_WIDTH,
    height: SMALL_CARD_HEIGHT,
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginLeft: -12, // Adjust as needed for the overlap effect
    borderWidth: 0.4,
    elevation: 3,
    padding: 2,
  },
  cardImage: {
    width: '100%',
    height: '100%', // Adjust as needed
    resizeMode: 'cover',
  },
  openCard: {
    width: SMALL_CARD_WIDTH,
    height: SMALL_CARD_HEIGHT,
    padding: 2,
    backgroundColor: 'white',
    borderRadius: 6,
  },
});

export {Table};
