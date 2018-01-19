import * as React from 'react';
import styled, { css } from 'styled-components';
import { font, palette as pale } from 'styled-theme';

export interface IHeadingProps extends IAtomProps {
  level?: number;
  reverse?: boolean;
  children: React.ReactNode;
} 
const DEFAULT_LEVEL = 1;
const DEFAULT_PALETTE = 'grayscale';
const fontSize = ({ level = DEFAULT_LEVEL }: IHeadingProps) => `${0.75 + (1 * (1 / level))}rem`;

const styles = css`
  font-family: ${font('primary')};
  font-size: ${fontSize};
  text-align: center;
  color: ${pale('grayscale', 0)};
`;

const Heading = styled(({
  level, children, reverse, palette, theme, ...props
}: IHeadingProps) => React.createElement(`h${level}`, props, children))`${styles}`;

Heading.defaultProps = {
  palette: DEFAULT_PALETTE,
  level: DEFAULT_LEVEL,
};

export default (props: IHeadingProps) => <Heading {...props} />;