declare interface StyledTool {
  ifProp<T>(prop: string, propValue: T, defaultValue: T): T;
}
declare module 'styled-tools' {
  const instance: StyledTool;
  export = instance;
}