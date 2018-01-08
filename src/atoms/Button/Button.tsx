import * as React from 'react';

export interface IButtonProps {
  children: React.ReactNode;
  /** Button Type */
  type?: 'submit' | 'button';
  /** Button Size */
  size?: 'large' | 'middle' | 'small';
  fullWidth?: boolean;
  theme?: 'red' | 'dark' | 'dark-gray';
  onClick?: () => void;
  disabled?: boolean;
}

/**
 * The only true button.
 */
export default ({ children, ...others }: IButtonProps) => {
  return <span {...others}>{children}</span>;
};