declare type TFont = string;
declare type TColor = string;
declare interface IComposer {
  reversePalette(palette: IPalette): IPalette;
}

declare interface IStyledTheme {
  palette(index: number): TColor;
  palette(p: string, index: number): TColor;
  palette(index: number, reverse: boolean): TColor;
  palette(p: string, index: number): TColor;
  palette(p: object, index: number): TColor;
  palette(p: string, index: number, reverse: boolean): TColor;
  font(f: string): TFont;
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
