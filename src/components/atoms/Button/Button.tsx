import * as React from 'react';
import styled, { css } from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';
import { font, palette as paletteTheme } from 'styled-theme';
import { ifProp } from 'styled-tools';

interface IButtonProps {
  theme?: ITheme;
  disabled?: boolean;
  palette?: string;
  transparent?: boolean;
  reverse?: boolean;
  height?: number;
  type?: string;
  size?: 'small' | 'default' | 'large';
  to?: string;
  href?: string;
}

const fontSize = ({ size = 'default', height = 40 }: IButtonProps) => {
  let baseline = 40;
  switch (size) {
    case 'small':
      baseline = 50;
      break;
    case 'large':
      baseline = 32;
      break;
    default:
  }
  return `${height / baseline}rem`;
};

const backgroundColor = ({ transparent, disabled, palette = 'primary' }: IButtonProps) => {
  return transparent ? 'transparent'
      : paletteTheme(palette === 'secondary' ? 'grayscale' : palette, disabled ? 2 : 0, palette === 'secondary');
};
const foregroundColor = ({ transparent, disabled, palette = 'primary' }: IButtonProps) =>
  transparent ? paletteTheme(disabled ? 2 : 1) : paletteTheme('grayscale', 0, palette !== 'secondary');

const hoverBackgroundColor = ({ disabled, transparent, palette = 'primary' }: IButtonProps) =>
  !disabled && !transparent
  && paletteTheme(palette, palette === 'secondary' ? 0 : 1)
  || '';

const hoverForegroundColor = ({ disabled, transparent, palette = 'primary' }: IButtonProps) =>
  !disabled && !transparent
  && paletteTheme(
    palette === 'secondary' ? 'primary' : 'grayscale',
    palette === 'secondary' ? 1 : 0,
    palette !== 'secondary'
  )
  || '';

const borderColor = ({ palette }: IButtonProps) =>
  ifProp('transparent', 'currentcolor', palette === 'secondary' ? paletteTheme('grayscale', 4, false) : 'transparent');

const hoverBorderColor = ({ palette }: IButtonProps) =>
  ifProp('transparent', 'currentcolor', palette === 'secondary' ? paletteTheme('primary', 1, false) : 'transparent');

const styles = css`
  display: inline-flex;
  font-family: ${font('primary')};
  align-items: center;
  white-space: nowrap;
  font-size: ${fontSize};
  border: 0.0625em solid ${borderColor};
  height: 2.5em;
  justify-content: center;
  text-decoration: none;
  cursor: ${ifProp('disabled', 'default', 'pointer')};
  appearance: none;
  padding: 0 1em;
  border-radius: 0.125em;
  box-sizing: border-box;
  pointer-events: ${ifProp('disabled', 'none', 'auto')};
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;
  background-color: ${backgroundColor};
  color: ${foregroundColor};
  &:hover, &:focus, &:active {
    background-color: ${hoverBackgroundColor};
    color: ${hoverForegroundColor};
    border: 0.0625em solid ${hoverBorderColor};
  }
  &:focus {
    outline: none
  }
`;

const StyledLink = styled<IButtonProps>(({
  disabled, transparent, reverse,  height, theme, ...props
}: IButtonProps) => <Link {...props as LinkProps} />)`${styles}`;

const Anchor = styled.a`${styles}`;
const StyledButton = styled.button`${styles}`;

export default ({ type = 'button', ...props }: IButtonProps) => {
  if (props.to) {
    return <StyledLink {...props} />;
  } else if (props.href) {
    return <Anchor {...props} />;
  }
  return <StyledButton {...props} type={type} />;
};