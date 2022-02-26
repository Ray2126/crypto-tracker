import { Appearance } from 'react-native';

const scheme = Appearance.getColorScheme();
console.log(scheme);
const lightTheme = {
  background: '#fff',
  primary: '#495162',
  secondary: '#8A96AA',
};
const darkTheme = {
  background: '#000000',
  primary: '#F6F6F6',
  secondary: '#646464',
};
const colors = scheme === 'light' ? lightTheme : darkTheme;

export default colors;