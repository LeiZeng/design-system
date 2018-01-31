import * as React from 'react';

import {
  ITextProps,
  Text,
  Textarea,
  ITextareaProps,
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
  if (props.type === 'textarea' || (props as ITextareaProps).resize === true) {
    return <Textarea {...props as ITextareaProps} />;
  } else if (props.type === 'select') {
    return <StyledSelect {...props as ISelectProps} />;
  } else if (props.type === 'radio') {
    return <StyledRadio {...props as IRadioProps} />;
  } else if (props.type === 'checkbox') {
    return <StyledCheckbox {...props as ICheckboxProps} />;
  } else {
    return <Text {...props as ITextProps} />;
  }
};
