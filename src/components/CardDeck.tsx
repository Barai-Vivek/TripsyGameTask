import React from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
} from 'react-native';
import {CARD_WIDTH, Card, cardData, moderateScale} from '../Constants';
import {CardSelectionProps} from './types';

const CardDeck = ({onSelect, passedData, myTurn}: CardSelectionProps) => {
  const keyExtractor = (_: any, index: number) => {
    return `key${index}`;
  };

  const handleCardPress = (cardId: string) => {
    // Enable LayoutAnimation for a smooth transition
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    onSelect(passedData === cardId ? undefined : cardId);
  };

  const renderCard = ({item, index}: {item: Card; index: any}) => {
    const isSelected = passedData === item.id;
    const isLastCard = index === cardData.length - 1;
    const cardStyle = [
      styles.cardContainer,
      isLastCard && Platform.OS === 'android' ? styles.lastCardAndroid : null,
    ];

    const scaleValue = new Animated.Value(1);
    const animatedStyle = {
      transform: [{scale: scaleValue}],
    };

    const handleCardPressIn = () => {
      Animated.spring(scaleValue, {
        toValue: 0.9,
        useNativeDriver: true,
        bounciness: 8, // Adjust bounciness as needed
        speed: 8, // Adjust speed as needed (lower value for slower animation)
      }).start();
    };

    const handleCardPressOut = () => {
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
        bounciness: 8, // Adjust bounciness as needed
        speed: 8, // Adjust speed as needed (lower value for slower animation)
      }).start();
    };

    return (
      <TouchableOpacity
        style={cardStyle}
        disabled={!myTurn}
        onPress={() => handleCardPress(item.id)}
        activeOpacity={0.7}
        onPressIn={handleCardPressIn}
        onPressOut={handleCardPressOut}>
        <Animated.View style={animatedStyle}>
          <Image source={item.imageUrl} style={styles.cardImage} />
          {(isSelected && (
            <View style={styles.overlay}>
              {/* add additional content for the overlay if needed */}
            </View>
          )) ||
            null}
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return cardData.length ? (
    <FlatList
      style={styles.container}
      data={cardData}
      keyExtractor={keyExtractor}
      renderItem={renderCard}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
    />
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
  },
  flatListContainer: {
    paddingHorizontal: moderateScale(20),
  },
  cardContainer: {
    width: moderateScale(CARD_WIDTH),
    height: '100%',
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: moderateScale(-32),
    elevation: 5,
    zIndex: 1,
  },
  lastCardAndroid: {
    marginRight: moderateScale(-20),
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 4,
    paddingEnd: moderateScale(-2),
    paddingBottom: moderateScale(-2),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default CardDeck;
