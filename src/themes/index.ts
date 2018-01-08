import {
  ITypography, typography,
  IColors, colors,
} from './default';

export interface ITheme {
  typography: ITypography;
  colors: IColors;
}
export interface IPropsWithTheme {
  theme: ITheme;
}

export default {
  typography,
  colors,
};