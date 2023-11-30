import {Dimensions} from 'react-native';
import {Images} from './asset';
export const {width, height} = Dimensions.get('screen');

export const SMALL_CARD_WIDTH = 41;
export const SMALL_CARD_HEIGHT = 56;

const guidelineBaseWidth: number = 375;

export const {width: screenWidth, height: screenHeight} =
  Dimensions.get('screen');

export const scale = (size: number): number =>
  (shortDimension / guidelineBaseWidth) * size;

const [shortDimension] = width < height ? [width, height] : [height, width];

export const moderateScale = (size: number, factor: number = 0.1): number =>
  Math.round(size + (scale(size) - size) * factor);

export const CARD_WIDTH = 60;
export const CARD_HEIGHT = 84;

export type Card = {
  id: string;
  imageUrl: string;
  title: string;
};

export const cardData: Card[] = [
  {id: '1', imageUrl: Images.icClub2, title: 'Card 1'},
  {id: '2', imageUrl: Images.icDiamond2, title: 'Card 2'},
  {id: '3', imageUrl: Images.icClubKing, title: 'Card 3'},
  {id: '4', imageUrl: Images.icHeart9, title: 'Card 4'},
  {id: '5', imageUrl: Images.icClub2, title: 'Card 5'},
  {id: '6', imageUrl: Images.icSpadesQueen, title: 'Card 6'},
  {id: '7', imageUrl: Images.icClub7, title: 'Card 7'},
  {id: '8', imageUrl: Images.icDiamond5, title: 'Card 8'},
  {id: '9', imageUrl: Images.icDiamondA, title: 'Card 9'},
  {id: '10', imageUrl: Images.icDiamondQ, title: 'Card 10'},
  {id: '11', imageUrl: Images.icHeart6, title: 'Card 11'},
  {id: '12', imageUrl: Images.icHeartJ, title: 'Card 12'},
  {id: '13', imageUrl: Images.icSpades2, title: 'Card 13'},
];
