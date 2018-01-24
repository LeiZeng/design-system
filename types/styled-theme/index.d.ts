declare type TFont = string;
declare type TColor = string;
declare interface IComposer {
  reversePalette(palette: IPalette): IPalette;
}

declare interface IStyledTheme {
  palette(index: number): Interpolation;
  palette(p: string, index: number): Interpolation;
  palette(index: number, reverse: boolean): Interpolation;
  palette(p: string, index: number): Interpolation;
  palette(p: object, index: number): Interpolation;
  palette(p: string, index: number, reverse: boolean): Interpolation;
  font(f: string): Interpolation;
  size(p: string): Interpolation;
}

declare interface IPalette {
  [key: string]: string | string[];
}

declare interface IFont {
  [key: string]: string;
}

declare interface ISize {
  [key: string]: string;
}

declare module 'styled-theme' {
  const instance: IStyledTheme;
  export = instance;
}

declare module 'styled-theme/composer' {
  const instance: IComposer;
  export = instance;
}
