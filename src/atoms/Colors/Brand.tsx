import * as React from 'react';
import styled, { css } from 'styled-components';
import { getPaletteFromTheme } from '../../themes';

export type TBrandColorProps = {
  theme: ITheme;
  palette: string;
  width?: string;
  height?: string;
};

const backgroundColor = (props: TBrandColorProps) => getPaletteFromTheme(props.palette);

const styles = css`
  display: block;
  width: ${({width = '200px'}: TBrandColorProps) => width};
  height: ${({height = '40px'}: TBrandColorProps) => height};
  background: ${backgroundColor};
`;

const StyledBrandColor = styled.span`${styles}`;

export default (props: TBrandColorProps) => (<StyledBrandColor {...props}/>);