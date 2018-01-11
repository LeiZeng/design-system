import * as React from 'react';
import styled, { css } from 'styled-components';
import { getPaletteFromTheme } from '../../themes';

type TColorProps = {
  theme: ITheme;
  palette: string;
  width?: string;
  height?: string;
};

const backgroundColor = (props: TColorProps) => getPaletteFromTheme(props.palette);

const styles = css`
  display: block;
  width: ${({width = '200px'}: TColorProps) => width};
  height: ${({height = '40px'}: TColorProps) => height};
  background: ${backgroundColor};
`;

const StyledBrandColor = styled.span`${styles}`;

export default (props: TColorProps) => (<StyledBrandColor {...props}/>);