declare interface ITextProps {
  fontSize: string;
}

declare interface ITypography {
  H1: ITextProps;
}

declare interface ITheme {
  typography: ITypography;
  palette: IPalette;
  reversePalette: IPalette;
  fonts: IFont;
  sizes: ISize;
}

declare interface IAtomProps {
  theme?: ITheme;
  palette?: string;
}

declare interface IBoxProps {
  width?: number;
  height?: number;
}