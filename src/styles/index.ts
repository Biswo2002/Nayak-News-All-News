import {extendTheme} from 'native-base';
import {fontFamily} from '../../app.json';
import {Dimensions} from 'react-native';

export const COLORS = {
  PRIMARY: '#DD0033',
  // PRIMARY: '#5B50A1',
  SECONDARY: '#DD0033',
  textWhite: '#FFFFFF',
  textSecondary: '#756bb3',
  textPrimary: '#a18d58',
  bgSecondary: '#fed7aa',
  fadeBlack: '#36454F',
  fadePrime: '#7166ba',
  StatusBarColor: '#201d56',
  // StatusBarColor: '#6d28d9',.
  // StatusBarColor: '#ff1171',
  // secondary: '#ff7717',
  red: '#dc2626',
  darkRed: '#7f1d1d',
  white: '#FFF',
  accent: '#0ea5e9',
  primary: {
    DEFAULT: '#201d56',
    50: '#6661CA',
    100: '#5852C5',
    200: '#423CB2',
    300: '#373293',
    400: '#2B2775',
    500: '#201D56',
    600: '#100F2C',
    700: '#010102',
    800: '#000000',
    900: '#000000',
    950: '#000000',
  },
  secondary: {
    DEFAULT: '#f49d0c',
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde58a',
    300: '#fbd24e',
    400: '#fabe25',
    500: '#f49d0c',
    600: '#d87607',
    700: '#bc560a',
    800: '#923f0e',
    900: '#78340f',
    950: '#451a03',
  },
};
export const FONTS = {
  100: {
    normal: `${fontFamily}-Light`,
    italic: `${fontFamily}-LightItalic`,
  },
  200: {
    normal: `${fontFamily}-ExtraLight`,
    italic: `${fontFamily}-ExtraLightItalic`,
  },
  300: {
    normal: `${fontFamily}-Regular`,
    italic: `${fontFamily}-Italic`,
  },
  400: {
    normal: `${fontFamily}-Medium`,
    italic: `${fontFamily}-MediumItalic`,
  },
  500: {
    normal: `${fontFamily}-SemiBold`,
    italic: `${fontFamily}-SemiBoldItalic`,
  },
  600: {
    normal: `${fontFamily}-Bold`,
    italic: `${fontFamily}-BoldItalic`,
  },
  700: {
    normal: `${fontFamily}-ExtraBold`,
    italic: `${fontFamily}-ExtraBoldItalic`,
  },
  800: {
    normal: `${fontFamily}-Black`,
    italic: `${fontFamily}-BlackItalic`,
  },
  900: {
    normal: `${fontFamily}-Black`,
    italic: `${fontFamily}-BlackItalic`,
  },
};

export const CustomTheme = extendTheme({
  colors: COLORS,
  fontConfig: {
    fontFamily: FONTS,
  },
  fonts: {
    heading: fontFamily,
    body: fontFamily,
    mono: fontFamily,
  },
});
export const {width, height} = Dimensions.get('screen');
