import * as React from 'react';
import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';

export interface IButtonProps {
  children: React.ReactNode;
  /** Button theme */
  theme: 'primary' | 'secondary' | 'danger' | 'alert' | 'success';
  /** Button Type */
  type?: 'submit' | 'button';
  /** Button Size */
  size?: 'large' | 'middle' | 'small';
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  transparent?: boolean;
}

const backgroundColor = ({ theme, transparent }: IButtonProps) =>
  transparent ? 'transparent' : palette(theme, 1);
const foregroundColor = ({ theme, transparent }: IButtonProps) =>
  transparent ? palette(theme, 1) : palette('grayscale', 0, true);
const hoverBackgroundColor = ({ theme, transparent }: IButtonProps) =>
  transparent ? 'transparent' : palette(theme, 0);
const hoverForegroundColor = ({ theme, transparent }: IButtonProps) =>
  transparent ? palette(theme, 0) : palette('grayscale', 0, true);
const border = ({ transparent }: IButtonProps) =>
  `0.0625em solid ${transparent ? 'currentcolor' : 'transparent'}`;

const styles = css`
  display: inline-flex;
  font-family: ${font('primary')};
  align-items: center;
  white-space: nowrap;
  font-size: 1em;
  height: 2.5em;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  appearance: none;
  padding: 0 1em;
  border: ${border};
  border-radius: 0.125em;
  box-sizing: border-box;
  pointer-events: 'auto'
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
  theme: 'primary',
};

export default ({ ...props }: IButtonProps) => <Button {...props} />;
