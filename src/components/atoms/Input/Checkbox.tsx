import * as React from 'react';
import styled, { css } from 'styled-components';

import {
  IInputProps,
  baseInputStyles,
} from './InputBase';

export interface ICheckboxProps extends IInputProps {
  type?: 'checkbox';
  checked?: boolean;
}

const checkboxStyle = css`
&[type=checkbox] {
  display: inline-block;
  border: 0;
  border-radius: 0;
  width: auto;
  height: auto;
  margin: 0 0.2rem 0 0;
}`;
export default styled((props: ICheckboxProps) => (
  <input {...props} />
))`
${baseInputStyles};
${checkboxStyle};
`;