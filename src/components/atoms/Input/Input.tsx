import * as React from 'react';

import {
  ITextProps,
  StyledInput,
  StyledTextarea,
} from './InputBase';

import StyledSelect, {
  ISelectProps,
} from './Select';

import StyledRadio, {
  IRadioProps,
} from './Radio';

import StyledCheckbox, {
  ICheckboxProps,
} from './Checkbox';

type TInputPropsAll = ISelectProps | IRadioProps | ITextProps | ICheckboxProps;

export default (props: TInputPropsAll) => {
  if (props.type === 'textarea') {
    return <StyledTextarea {...props as ITextProps} />;
  } else if (props.type === 'select') {
    return <StyledSelect {...props as ISelectProps} />;
  } else if (props.type === 'radio') {
    return <StyledRadio {...props as IRadioProps} />;
  } else if (props.type === 'checkbox') {
    return <StyledCheckbox {...props as ICheckboxProps} />;
  } else {
    return <StyledInput {...props as ITextProps} />;
  }
};
