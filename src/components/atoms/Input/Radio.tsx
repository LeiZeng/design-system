import * as React from 'react';
import styled, { css } from 'styled-components';

import {
  IInputProps,
  baseInputStyles,
} from './InputBase';

export interface IRadioProps extends IInputProps {
  type?: 'radio';
  checked?: boolean;
}

const radioStyle = css`
&[type=radio] {
  display: inline-block;
  border: 0;
  border-radius: 0;
  width: auto;
  height: auto;
  margin: 0 0.2rem 0 0;
}`;

export default styled((props: IRadioProps) => (
  <input {...props} />
))`
${baseInputStyles};
${radioStyle};
`;