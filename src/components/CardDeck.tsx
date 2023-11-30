import React, {useEffect, useRef} from 'react';
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
  const animationValuesDrag = useRef(
    cardData.map(() => new Animated.Value(0)),
  ).current;

  useEffect(() => {
    Animated.stagger(
      100,
      animationValuesDrag.map(value =>
        Animated.timing(value, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ),
    ).start();
  }, [animationValuesDrag]);

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

    const animatedStyleDrag = {
      transform: [
        {
          translateY: animationValuesDrag[index].interpolate({
            inputRange: [0, 10],
            outputRange: [moderateScale(-84), moderateScale(780)], // Adjust as needed for card distribution
          }),
        },
        {
          translateX: animationValuesDrag[index].interpolate({
            inputRange: [0, 1],
            outputRange: [index > 3 ? -50 : 0, 0], // Adjust as needed for card distribution
          }),
        },
      ],
    };

    const handleCardPressIn = () => {
      Animated.spring(scaleValue, {
        toValue: 0.9,
        useNativeDriver: true,
        bounciness: 8,
        speed: 8,
      }).start();
    };

    const handleCardPressOut = () => {
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
        bounciness: 8,
        speed: 8,
      }).start();
    };

    return (
      <Animated.View style={animatedStyleDrag}>
        <TouchableOpacity
          style={cardStyle}
          disabled={!myTurn}
          onPress={() => handleCardPress(item.id)}
          activeOpacity={0.7}
          onPressIn={handleCardPressIn}
          onPressOut={handleCardPressOut}>
          <Animated.View style={animatedStyle}>
            <Image source={item.imageUrl} style={styles.cardImage} />
            {(isSelected && <View style={styles.overlay} />) || null}
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
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
    borderRadius: moderateScale(4),
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
    borderRadius: moderateScale(4),
    paddingEnd: moderateScale(-2),
    paddingBottom: moderateScale(-2),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default CardDeck;
