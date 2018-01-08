export interface ITextProps {
  fontSize: string;
}
export interface IColors {
  primary: string | string[];
  secondary: string | string[];
  danger: string | string[];
  alert: string | string[];
  warnning?: string | string[];
  success: string | string[];
  fail?: string | string[];
  neutral: string | string[];
}
export type TColorTypes = keyof IColors;
export type IColorProps = {
  [T in TColorTypes]?: boolean | number;
};

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
export const getColor = (colorKey: string | undefined, colorIndex?: number) => {
  let result;
  if (typeof colorIndex === 'number') {
    if (colorKey && colors[colorKey] && colors[colorKey][colorIndex]) {
      result = colors[colorKey][colorIndex];
    }  
  } else if (colorKey) {
    if (typeof colors[colorKey] === 'string') {
        result = colors[colorKey];
    } else {
      result = colors[colorKey][0];
    }
  } else {
    result = typeof colors.primary === 'string' ? <string> colors.primary : colors.primary[0];
  }
  return result;
};