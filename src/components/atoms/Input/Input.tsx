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

const DEFAULT_HEIGHT = 40;
const fontSize = ({ height = DEFAULT_HEIGHT }: IInputProps) =>
  `${height / 35.5555555556}rem`;

const styles = css`
  font-family: ${font('primary')};
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-size: ${fontSize};
  padding: ${ifProp(
    { type: 'textarea' },
    '0.4444444444em',
    '0 0.4444444444em'
  )};
  height: ${ifProp({ type: 'textarea' }, 'auto', '2.2222222222em')};
  color: ${palette('grayscale', 0)};
  background-color: ${palette('grayscale', 0, true)};
  border: 1px solid
    ${ifProp('invalid', palette('danger', 2), palette('grayscale', 3))};
  border-radius: 2px;
  &[type='checkbox'],
  &[type='radio'] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }
`;
const StyledTextarea = styled.textarea`
  ${styles};
`;
const StyledSelect = styled<ISelectProps>(({ options = {}, ...props }) => (
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
))`
  ${styles};
`;
const StyledInput = styled.input`
  ${styles};
`;

export default ({ height = DEFAULT_HEIGHT, ...props }: TInputPropsAll) => {
  if (props.type === 'textarea') {
    return <StyledTextarea {...props} height={height} />;
  } else if (props.type === 'select') {
    return <StyledSelect {...props} height={height} />;
  } else if (props.type === 'radio' || props.type === 'checkbox') {
    return <StyledRadioOrCheckbox {...props} height={height} />;
  }
  return <StyledInput {...props} height={height} />;
};
