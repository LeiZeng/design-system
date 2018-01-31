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
export interface ITextareaProps extends ITextProps {
  resize?: boolean;
}

const DEFAULT_HEIGHT = 40;

const fontSize = ({height}: IInputProps) => `${(height || DEFAULT_HEIGHT) / 35.5555555556}rem`;
const textareaHeight = ({height}: IInputProps) => `${height || DEFAULT_HEIGHT}px`;
const resize = ({resize = true}: ITextareaProps) => resize ? 'vertical' : 'none';

const textStyle = css`
  &input[type="text"], &input[type="password"], &input[type="number"] {
    -webkit-appearance: none;
  }
`;
const textareaStyles = css`
  font-size: 1.125rem;
  padding: 0.4444444444em;
  height: ${textareaHeight}; 
  min-height: ${textareaHeight};
  max-width: 100%;
  vertical-align: bottom;
  transition: all .3s, height 0s;
  list-style: none;
  overflow: auto;
  resize: ${resize};
  touch-action: manipulation;
  ${textStyle}
`;
export const baseInputStyles = css`
  font-family: ${font('primary')};
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-size: ${fontSize};
  padding: 0 0.4444444444em;
  height: 2.2222222222em;
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

const StyledTextarea = styled(({height, ...props}: ITextareaProps) => <textarea {...props} />);
const StyledInput = styled((props: ITextareaProps) => <input {...props} />);

export const Textarea = StyledTextarea`${baseInputStyles};${textareaStyles};`;
export const Text = StyledInput`${textStyle};${baseInputStyles};`;
