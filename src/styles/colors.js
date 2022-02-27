import { Appearance } from 'react-native';

const scheme = Appearance.getColorScheme();

const defaultColors = {
  positive: '#33BB5D',
  accent: '#F15A29',
};

const lightTheme = {
  ...defaultColors,
  background: '#FFFFFF',
  primary: '#495162',
  secondary: '#8A96AA',
};
const darkTheme = {
  ...defaultColors,
  background: '#000000',
  primary: '#F6F6F6',
  secondary: '#646464',
};
const colors = scheme === 'light' ? lightTheme : darkTheme;

export default colors;