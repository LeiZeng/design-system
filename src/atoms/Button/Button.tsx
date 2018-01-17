import * as React from 'react';
import styled, { css } from 'styled-components';
import { font, palette, size as sizeTheme } from 'styled-theme';

export interface IButtonProps {
  children: React.ReactNode;
  /** Button theme */
  color: 'primary' | 'secondary' | 'danger' | 'alert' | 'success';
  /** Button Type */
  type?: 'submit' | 'button';
  /** Button Size */
  size?: 'large' | 'middle' | 'small';
  fullWidth?: boolean;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  transparent?: boolean;
}

const backgroundColor = ({ color, transparent, disabled }: IButtonProps) =>
  transparent ? 'transparent' : palette(color, disabled ? 2 : 1);

const foregroundColor = ({ color, transparent, disabled }: IButtonProps) =>
  transparent
    ? palette(color, disabled ? 2 : 1)
    : palette('grayscale', 0, true);

const hoverBackgroundColor = ({ color, transparent, disabled }: IButtonProps) =>
  !disabled && !transparent && palette(color, 0);

const hoverForegroundColor = ({ color, transparent, disabled }: IButtonProps) =>
  !disabled && transparent && palette(color, 0);

const width = ({ size, fullWidth }: IButtonProps) => {
  return fullWidth ? '100%' : sizeTheme(size as string);
};

const border = ({ transparent }: IButtonProps) =>
  `0.0625em solid ${transparent ? 'currentcolor' : 'transparent'}`;

const cursor = ({ disabled }: IButtonProps) =>
  disabled ? 'not-allowed' : 'pointer';

const styles = css`
  display: inline-flex;
  font-family: ${font('primary')};
  align-items: center;
  white-space: nowrap;
  font-size: 1em;
  width: ${width};
  height: 2.5em;
  justify-content: center;
  text-decoration: none;
  cursor: ${cursor};
  appearance: none;
  padding: 0 1em;
  border: ${border};
  border-radius: 0.125em;
  box-sizing: border-box;
  pointer-events: 'auto';
  transition: background-color 250ms ease-out, color 250ms ease-out,
    border-color 250ms ease-out;
  background-color: ${backgroundColor};
  color: ${foregroundColor};
  &:hover,
  &:focus,
  &:active {
    background-color: ${hoverBackgroundColor};
    color: ${hoverForegroundColor};
  }
  &:focus {
    outline: none;
  }
`;

const Anchor = styled.a`
  ${styles};
`;
const StyledButton = styled.button`
  ${styles};
`;

const Button: React.SFC<IButtonProps> = ({ type, ...props }: IButtonProps) => {
  if (props.href) {
    return <Anchor {...props} />;
  } else {
    return <StyledButton {...props} type={type} />;
  }
};

Button.defaultProps = {
  color: 'primary',
};

export default ({ ...props }: IButtonProps) => <Button {...props} />;
