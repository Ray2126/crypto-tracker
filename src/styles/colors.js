import { Appearance } from 'react-native';

const scheme = Appearance.getColorScheme();

const positive = '#33BB5D';
const lightTheme = {
  background: '#FFFFFF',
  primary: '#495162',
  secondary: '#8A96AA',
  positive,
};
const darkTheme = {
  background: '#000000',
  primary: '#F6F6F6',
  secondary: '#646464',
  positive,
};
const colors = scheme === 'light' ? lightTheme : darkTheme;

export default colors;