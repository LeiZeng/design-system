import * as React from 'react';
import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';
import { ifProp } from 'styled-tools';

type TSelectProps = {
  options: string[];
};
type TTextProps = {
  placeholder?: string;
};
type TRadioProps = {
  checked?: boolean;
};
type TTypeSpecificProps = TSelectProps | TTextProps | TRadioProps;
type TInputProps = {
  type?: string;
} & TTypeSpecificProps & IBoxProps & IAtomProps;

const DEFAULT_TYPE = 'text';
const DEFAULT_HEIGHT = 40;
const fontSize = ({ height = DEFAULT_HEIGHT }: TInputProps) => `${height / 35.5555555556}rem`;

const styles = css`
  font-family: ${font('primary')};
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-size: ${fontSize};
  padding: ${ifProp({ type: 'textarea' }, '0.4444444444em', '0 0.4444444444em')};
  height: ${ifProp({ type: 'textarea' }, 'auto', '2.2222222222em')};
  color: ${palette('grayscale', 0)};
  background-color: ${palette('grayscale', 0, true)};
  border: 1px solid ${ifProp('invalid', palette('danger', 2), palette('grayscale', 3))};
  border-radius: 2px;
  &[type=checkbox], &[type=radio] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }
`;

const StyledTextarea = styled.textarea`${styles}`;
const StyledSelect = styled.select`${styles}`;
const StyledInput = styled.input`${styles}`;

export default ({ type = DEFAULT_TYPE, height = DEFAULT_HEIGHT, ...props }: TInputProps) => {
  if (type === 'textarea') {
    return <StyledTextarea {...props} height={height} />;
  } else if (type === 'select') {
    return <StyledSelect {...props} height={height} />;
  }
  return <StyledInput {...props} height={height} />;
};