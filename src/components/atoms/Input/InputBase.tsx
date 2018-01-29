import * as React from 'react';
import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';
import { ifProp } from 'styled-tools';

export interface IInputProps {
  theme?: ITheme;
  palette?: string;
  width?: number;
  height?: number;
}
export interface ITextProps extends IInputProps {
  type?: 'text' | 'textarea';
  placeholder?: string;
}
interface IFontProps {
  type?: string;
  height?: number;
}

const DEFAULT_HEIGHT = 40;
const DEFAULT_TEXTAREA_HEIGHT = 100;
const TEXTAREA = 'textarea';

const fontSize = ({type, height}: IFontProps) =>
  type === TEXTAREA ? '1rem' : `${(height || DEFAULT_HEIGHT) / 35.5555555556}rem`;

export const baseInputStyles = css`
  font-family: ${font('primary')};
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-size: ${fontSize};
  padding: ${ifProp({ type: TEXTAREA }, '0.4444444444em', '0 0.4444444444em')};
  height: ${({ height }) => ifProp({ type: TEXTAREA }, `${height}px`, '2.2222222222em')};
  color: ${palette('grayscale', 0)};
  background-color: ${palette('grayscale', 0, true)};
  border: 1px solid ${ifProp('invalid', palette('danger', 2), palette('grayscale', 2, true))};
  border-radius: 2px;
  outline: 0;
  &::placeholder {
    color: ${palette('grayscale', 3, true)}
  }
  &:hover {
    border: 1px solid ${ifProp('invalid', palette('danger', 2), palette('primary', 2))};
  }
  &:focus {
    border: 1px solid ${ifProp('invalid', palette('danger', 2), palette('primary', 2))};
    box-shadow: 0 0 2px 0 ${ifProp('invalid', palette('danger', 2), palette('primary', 2))}
  }
`;
export const StyledTextarea = styled(({type = TEXTAREA, height = DEFAULT_TEXTAREA_HEIGHT, ...props}: ITextProps) => (
  <textarea {...props} />
))`${baseInputStyles}`;
export const StyledInput = styled((props: ITextProps) => (
  <input {...props} />
))`${baseInputStyles};`;
