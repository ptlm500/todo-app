import flexUnit from './flexUnit';

const colour = {
  background: '#FFFFFF',
  primaryDark: '#303F9F',
  primaryLight: '#C5CAE9',
  primary: '#3F51B5',
  disabled: '#BDBDBD',
  divider: '#BDBDBD',
  text: '#212121',
  icon: '#212121',
  invertedText: '#FFFFFF',
  invertedIcon: '#FFFFFF',
  secondaryText: '#757575',
  secondaryIcon: '#757575',
  accent: '#448AFF',
  danger: '#D32F2F',
  dangerLight: '#F44336',
  green: '#388E3C',
  red: '#D32F2F',
};

const font = {
  family: '\'Segoe UI\', \'HelveticaNeue-Light\', sans-serif',
  headerSize: flexUnit(5, 12, 32),
  bodySize: flexUnit(2.5, 12, 16)
};

const transition = {
  short: '0.1s',
  long: '0.3s',
};

export default {
  colour,
  font,
  transition,
  defaultRadius: '0.5rem',
};
