import * as React from 'react';
import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';
import { NavLink, NavLinkProps } from 'react-router-dom';

export interface ILinkProps extends NavLinkProps {
  theme?: ITheme;
  palette?: string;
  reverse?: boolean;
}

const styles = css`
  font-family: ${font('primary')};
  text-decoration: none;
  font-weight: 500;
  color: ${palette({ grayscale: 0 }, 1)};
  &:hover {
    text-decoration: underline;
  }
`;

const StyledNavLink = styled(({
  theme, reverse, palette, ...props
}: ILinkProps) => <NavLink {...props} />)`${styles}`;

const Anchor = styled.a`${styles}`;

export default ({ palette = 'grayscale', ...props }: ILinkProps) => {
  if (props.to) {
    return <StyledNavLink {...props} palette={palette} />;
  }
  return <Anchor {...props} />;
};
