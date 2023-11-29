import React from 'react';
import {View, Image, Text, FlatList, StyleSheet} from 'react-native';
import {Images} from '../asset';
import {CARD_WIDTH} from '../Constants';

interface Card {
  id: string;
  imageUrl: string;
  title: string;
}

const cardData: Card[] = [
  {id: '1', imageUrl: Images.icDeck, title: 'Card 1'},
  {id: '2', imageUrl: Images.icDeck, title: 'Card 2'},
  {id: '3', imageUrl: Images.icDeck, title: 'Card 3'},
  {id: '4', imageUrl: Images.icDeck, title: 'Card 4'},
  {id: '5', imageUrl: Images.icDeck, title: 'Card 5'},
  {id: '6', imageUrl: Images.icDeck, title: 'Card 6'},
  {id: '7', imageUrl: Images.icDeck, title: 'Card 7'},
  {id: '8', imageUrl: Images.icDeck, title: 'Card 8'},
  {id: '9', imageUrl: Images.icDeck, title: 'Card 9'},
  {id: '10', imageUrl: Images.icDeck, title: 'Card 10'},
  {id: '11', imageUrl: Images.icDeck, title: 'Card 11'},
  {id: '12', imageUrl: Images.icDeck, title: 'Card 12'},
  {id: '13', imageUrl: Images.icDeck, title: 'Card 13'},
];

const CardDeck: React.FC = () => {
  const keyExtractor = (_: any, index: number) => {
    return `key${index}`;
  };

  const renderCard = ({item}: {item: Card; index: any}) => {
    return (
      <View style={styles.cardContainer}>
        <Image source={item.imageUrl} style={styles.cardImage} />
      </View>
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={cardData}
      keyExtractor={keyExtractor}
      renderItem={renderCard}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20, // Adjust padding as needed
  },
  flatListContainer: {
    paddingStart: 20, // Adjust padding as needed
  },
  cardContainer: {
    width: CARD_WIDTH,
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginLeft: -32, // Adjust as needed for the overlap effect
    borderWidth: 0.4,
    elevation: 3,
    padding: 2,
  },
  cardImage: {
    width: '100%',
    height: '100%', // Adjust as needed
    resizeMode: 'cover',
  },
});

export default CardDeck;
