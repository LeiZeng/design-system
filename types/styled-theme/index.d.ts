declare interface IComposer {
  reversePalette(palette: IPalette): IPalette;
}

declare interface IStyledTheme {
  palette(p: string, index: number): string;
  palette(p: string, index: number, reverse: boolean): string;
  font(p: strint): string;
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
