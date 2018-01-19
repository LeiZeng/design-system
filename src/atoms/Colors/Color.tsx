import * as React from 'react';
import styled, { css } from 'styled-components';
import { getPaletteFromTheme } from '../../themes';

export type TColorProps = IBoxProps & IAtomProps;

const DEFAULT_PALETTE = 'primary';
const backgroundColor = ({palette = DEFAULT_PALETTE}: TColorProps) => getPaletteFromTheme(palette);

const styles = css`
  display: block;
  width: ${({width = '200px'}: TColorProps) => width};
  height: ${({height = '40px'}: TColorProps) => height};
  background: ${backgroundColor};
`;

const StyledColor = styled.span`${styles}`;

export default (props: TColorProps) => (<StyledColor {...props} />);