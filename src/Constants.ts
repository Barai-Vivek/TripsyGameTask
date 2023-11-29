import {Dimensions} from 'react-native';
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
