export interface ITextProps {
  fontSize: string;
}
export interface IColors {
  primary: string;
  secondary: string;
  danger: string;
  alert: string;
  warnning?: string;
  success: string;
  fail?: string;
  neutral: Array<string>;
}
export type TColorTypes = keyof IColors;
export interface ITypography {
  H1: ITextProps;
}
export const typography: ITypography = {
  H1: {
    fontSize: '1.6em',
  }
};
export const colors: IColors = {
  primary: '#1890FF',
  secondary: '#0050B3',
  danger: '#f5222d',
  alert: '#ffec3d',
  success: '#52c41a',
  neutral: [
    '#ffffff',
    '#fafafa',
    '#f5f5f5',
    '#e8e8e8',
    '#d9d9d9',
    'rgba(0, 0, 0, 0.25)',
    'rgba(0, 0, 0, 0.45)',
    'rgba(0, 0, 0, 0.65)',
    'rgba(0, 0, 0, 0.85)',
    '#000000'
  ],
};