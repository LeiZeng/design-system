import * as React from 'react';
import styled, { css } from 'styled-components';

import {
  IInputProps,
  ITextProps,
  StyledInput,
  StyledTextarea,
  baseInputStyles,
} from './InputBase';

interface ISelectProps extends IInputProps {
  type?: 'select';
  options: {
    [key: string]: string;
  };
}
interface IRadioProps extends IInputProps {
  type?: 'radio' | 'checkbox';
  checked?: boolean;
}
type TInputPropsAll = ISelectProps | IRadioProps | ITextProps;

const radioAndCheckboxStyle = css`
&[type=checkbox], &[type=radio] {
  display: inline-block;
  border: 0;
  border-radius: 0;
  width: auto;
  height: auto;
  margin: 0 0.2rem 0 0;
}`;
const StyledSelect = styled(({type = 'select', options = {}, ...props}: ISelectProps) => (
  <select {...props}>
    {Object.keys(options).map(key => (
      <option key={key} value={key}>
        {options[key]}
      </option>
    ))}
  </select>
))`
${baseInputStyles};
${radioAndCheckboxStyle};
`;
const StyledRadioOrCheckbox = styled((props: IRadioProps) => (
  <input {...props} />
))`
${baseInputStyles};
${radioAndCheckboxStyle};
`;

export default (props: TInputPropsAll) => {
  if (props.type === 'textarea') {
    return <StyledTextarea {...props as ITextProps} />;
  } else if (props.type === 'select') {
    return <StyledSelect {...props as ISelectProps} />;
  } else if (props.type === 'radio' || props.type === 'checkbox') {
    return <StyledRadioOrCheckbox {...props as IRadioProps} />;
  } else {
    return <StyledInput {...props as ITextProps} />;
  }
};
