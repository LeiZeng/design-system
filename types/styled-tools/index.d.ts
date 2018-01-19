declare interface StyledTool {
  ifProp<T>(prop: T, propValue: string, defaultValue: string): string;
}
declare module 'styled-tools' {
  const instance: StyledTool;
  export = instance;
}