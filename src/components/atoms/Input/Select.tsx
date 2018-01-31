import * as React from 'react';
import styled, { css } from 'styled-components';

import {
  IInputProps,
  baseInputStyles,
} from './InputBase';

export interface ISelectProps extends IInputProps {
  type?: 'select';
  options: {
    [key: string]: string;
  };
}

const selectStyle = css`
&select {
}`;
export default styled(({type = 'select', options = {}, ...props}: ISelectProps) => (
  <select {...props}>
    {Object.keys(options).map(key => (
      <option key={key} value={key}>
        {options[key]}
      </option>
    ))}
  </select>
))`
${baseInputStyles};
${selectStyle};
`;