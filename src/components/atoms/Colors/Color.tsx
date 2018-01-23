import * as React from 'react';
import styled, { css } from 'styled-components';
import { getPaletteFromTheme } from '../../themes';

export interface IColorProps {
  theme?: ITheme;
  palette?: string;
  width?: number;
  height?: number;
}

const DEFAULT_PALETTE = 'primary';
const backgroundColor = ({palette = DEFAULT_PALETTE}: IColorProps) => getPaletteFromTheme(palette);

const styles = css`
  display: block;
  width: ${({width = '200px'}: IColorProps) => width};
  height: ${({height = '40px'}: IColorProps) => height};
  background: ${backgroundColor};
`;

const StyledColor = styled.span`${styles}`;

export default (props: IColorProps) => (<StyledColor {...props} />);