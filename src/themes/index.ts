import { palette } from 'styled-theme';
import theme from './default';

export interface IPropsWithTheme {
  theme: ITheme;
}

export const getPaletteFromTheme = (p= 'primary'): string => {
  const hasIndex = p.match(/\d+$/);
  let index;

  if (!hasIndex) {
    index = 0;
  } else {
    index = Number(hasIndex[0]) || 0;
  }
  return palette(p.replace(/\d+$/, ''), index);
};

export default theme;