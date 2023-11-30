import React, {useRef, useEffect} from 'react';
import {View, FlatList, Animated, StyleSheet, Text} from 'react-native';
import {CARD_WIDTH, moderateScale} from '.';

const Testing = () => {
  const data = Array.from({length: 10}).map((_, index) => ({
    id: index.toString(),
  }));

  const animationValues = useRef(data.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    Animated.stagger(
      100,
      animationValues.map(value =>
        Animated.timing(value, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ),
    ).start();
  }, []);

  const renderItem = ({index}) => {
    const animatedStyle = {
      transform: [
        {
          translateY: animationValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0], // Adjust as needed for card distribution
          }),
        },
        {
          translateX: animationValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: [50, 0], // Adjust as needed for card distribution
          }),
        },
      ],
    };

    return (
      <Animated.View style={[styles.card, animatedStyle]}>
        <Text>{`Card ${index + 1}`}</Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  flatListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: moderateScale(CARD_WIDTH),
    height: 120,
    backgroundColor: 'lightblue',
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(4),
    overflow: 'hidden',
    marginRight: moderateScale(-32),
    elevation: 5,
    zIndex: 1,
  },
});

export default Testing;
