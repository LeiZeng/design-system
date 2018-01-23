import * as React from 'react';
import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';
import { ifProp } from 'styled-tools';

interface IInputProps {
  type?: 'text' | 'select' | 'textarea' | 'radio' | 'checkbox';
  theme?: ITheme;
  palette?: string;
  width?: number;
  height?: number;
}
interface ISelectProps extends IInputProps {
  options?: {
    [key: string]: string;
  };
}
interface ITextProps extends IInputProps {
  placeholder?: string;
}
interface IRadioProps extends IInputProps {
  checked?: boolean;
}
type TInputPropsAll = ISelectProps & IRadioProps & ITextProps;

const DEFAULT_TYPE = 'text';
const DEFAULT_HEIGHT = 40;
const fontSize = ({ height = DEFAULT_HEIGHT }: IInputProps) => `${height / 35.5555555556}rem`;

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
const StyledSelect = styled(({options = {}, ...props}: ISelectProps) => (
  <select {...props}>
  {Object.keys(options).map(key => <option key={key} value={key}>{options[key]}</option>)}
  </select>
))`${styles}`;
const StyledRadioOrCheckbox = styled(({...props}: IRadioProps) => (
  <input {...props}/>
))`${styles}`;
const StyledInput = styled.input`${styles}`;

export default ({ type = DEFAULT_TYPE, height = DEFAULT_HEIGHT, ...props }: TInputPropsAll) => {
  if (type === 'textarea') {
    return <StyledTextarea {...props} height={height} />;
  } else if (type === 'select' && !!props.options) {
    return <StyledSelect {...props} height={height} />;
  } else if (type === 'radio' || type === 'checkbox') {
    return <StyledRadioOrCheckbox {...props} type={type} height={height}/>;
  }
  return <StyledInput {...props} height={height} />;
};