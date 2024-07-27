import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

const COLORS = {
  primary: {
    light: '#30b9b2',
    dark: '#00fff53c'
  },
  secondary: {
    light: '#ffe5db',
    dark: '#ffa44f'
  },
  gray: {
    light: '#C1C0C8',
    dark: '#83829A'
  },
  offwhite: '#F3F4F8',
  white: '#FFFFFF',
  lightWhite: '#FAFAFC',
  black: '#000000',
  red: '#e81e4d',
  green: ' #00C135',
  blue: '#0078a6'
}

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width
}

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5
  }
}

export { COLORS, SHADOWS, SIZES }
