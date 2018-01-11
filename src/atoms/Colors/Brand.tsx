import * as React from 'react';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

type TColorProps = {
  theme: ITheme;
  palette: string;
  width?: string;
  height?: string;
};

const getPalette = (p: string): string => {
  const hasIndex = p.match(/\d+$/);
  let index;

  if (!hasIndex) {
    index = 0;
  } else {
    index = Number(hasIndex[0]) || 0;
  }
  return palette(p.replace(/\d+$/, ''), index);
};
const backgroundColor = (props: TColorProps) => getPalette(props.palette);

const styles = css`
  display: block;
  width: ${({width = '200px'}: TColorProps) => width};
  height: ${({height = '40px'}: TColorProps) => height};
  background: ${backgroundColor};
`;
const StyledBrandColor = styled.span`${styles}`;

export default (props: TColorProps) => (<StyledBrandColor {...props}/>);