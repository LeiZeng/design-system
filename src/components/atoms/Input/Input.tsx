import * as React from 'react';
import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';
import { ifProp } from 'styled-tools';

interface IInputProps {
  theme?: ITheme;
  palette?: string;
  width?: number;
  height?: number;
}
interface ISelectProps extends IInputProps {
  type: 'select';
  options: {
    [key: string]: string;
  };
}
interface ITextProps extends IInputProps {
  type?: 'text' | 'textarea';
  placeholder?: string;
}
interface IRadioProps extends IInputProps {
  type: 'radio' | 'checkbox';
  checked?: boolean;
}
type TInputPropsAll = ISelectProps | IRadioProps | ITextProps;

const DEFAULT_TYPE = 'text';
const DEFAULT_HEIGHT = 40;
const fontSize = ({
  type = DEFAULT_TYPE,
  height = DEFAULT_HEIGHT
}: TInputPropsAll) => type === 'textarea' ? '1rem' : `${height / 35.5555555556}rem`;

const styles = css`
  font-family: ${font('primary')};
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-size: ${fontSize};
  padding: ${ifProp({ type: 'textarea' }, '0.4444444444em', '0 0.4444444444em')};
  height: ${({ height }) => ifProp({ type: 'textarea' }, `${height}px`, '2.2222222222em')};
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
  &[type=checkbox], &[type=radio] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }
`;
const StyledTextarea = styled<ITextProps>(({type = 'textarea', height = 100, ...props}) => (
  <textarea {...props} />
))`${styles}`;
const StyledSelect = styled<ISelectProps>(({type = 'select', options = {}, ...props}) => (
  <select {...props}>
    {Object.keys(options).map(key => (
      <option key={key} value={key}>
        {options[key]}
      </option>
    ))}
  </select>
))`
  ${styles};
`;
const StyledRadioOrCheckbox = styled<IRadioProps>(({ ...props }) => (
  <input {...props} />
))`${styles};`;
const StyledInput = styled<ITextProps>(({ ...props }) => (
  <input {...props} />
))`${styles};`;

export default ({type = DEFAULT_TYPE, ...props}: TInputPropsAll) => {
  if (type === 'textarea') {
    return <StyledTextarea {...props} />;
  } else if (type === 'select') {
    return <StyledSelect {...props as ISelectProps} />;
  } else if (type === 'radio' || type === 'checkbox') {
    return <StyledRadioOrCheckbox {...props} type={type} />;
  } else {
    return <StyledInput {...props} type={type} />;
  }
};
