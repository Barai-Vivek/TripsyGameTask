import React from 'react';
import {View, Image, FlatList, StyleSheet} from 'react-native';
import {Images} from '../asset';
import {CARD_WIDTH} from '../Constants';

interface Card {
  id: string;
  imageUrl: string;
  title: string;
}

const cardData: Card[] = [
  {id: '1', imageUrl: Images.icClub2, title: 'Card 1'},
  {id: '2', imageUrl: Images.icDiamond2, title: 'Card 2'},
  {id: '3', imageUrl: Images.icClubKing, title: 'Card 3'},
  {id: '4', imageUrl: Images.icHeart9, title: 'Card 4'},
  {id: '5', imageUrl: Images.icClub2, title: 'Card 5'},
  {id: '6', imageUrl: Images.icSpadesQueen, title: 'Card 6'},
  {id: '7', imageUrl: Images.icJoker, title: 'Card 7'},
  {id: '8', imageUrl: Images.icClub2, title: 'Card 8'},
  {id: '9', imageUrl: Images.icClub2, title: 'Card 9'},
  {id: '10', imageUrl: Images.icClub2, title: 'Card 10'},
  {id: '11', imageUrl: Images.icClub2, title: 'Card 11'},
  {id: '12', imageUrl: Images.icClub2, title: 'Card 12'},
  {id: '13', imageUrl: Images.icClub2, title: 'Card 13'},
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
    paddingHorizontal: 20, // Adjust padding as needed
  },
  flatListContainer: {
    paddingHorizontal: 20, // Adjust padding as needed
  },
  cardContainer: {
    width: CARD_WIDTH,
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginStart: -32, // Adjust as needed for the overlap effect
  },
  cardImage: {
    width: '100%',
    height: '100%', // Adjust as needed
    resizeMode: 'cover',
  },
});

export default CardDeck;
