import * as React from 'react';
import styled, { css, StyledProps } from 'styled-components';
import { font, palette } from 'styled-theme';
import { ifProp } from 'styled-tools';

export type TWrappedComponentFactory<P> = (props: P) => JSX.Element;
export type TWrappedComponent<P> = React.ComponentClass<P> | TWrappedComponentFactory<P> | React.StatelessComponent<P>;
export type TWithBeforeAfterProps = {
  withBefore?: React.ReactNode;
  withAfter?:  React.ReactNode;
  withWrapper?: TWrappedComponent<{}>;
};

const wrapperStyle = css`
font-family: ${font('primary')};
color: ${palette('grayscale', 0)};
background-color: ${palette('grayscale', 0, true)};
display: table;
border-collapse: separate;
border-spacing: 0;
margin: 10px;
box-sizing: border-box;
width: 100%;

&>*,
&>input,
&>span
{
  display: table-cell;
  border: 1px solid ${ifProp('invalid', palette('danger', 2), palette('grayscale', 2, true))};
  box-sizing: border-box;
  white-space: nowrap;
  vertical-align: middle;
  text-align: center;
}
`;

const WrapperComponent = styled(
  // tslint:disable-next-line:no-any
  ({children, ...props}: StyledProps<any>) => <span {...props}>{children}</span>
)`${wrapperStyle}`;

const WrapPlainString = (text: React.ReactNode) => {
  if (!text) {
    return null;
  }
  return typeof text === 'string' ? <span>{text}</span> : text;
};
function withBeforeAfter<P>(
  WrappedComponent: TWrappedComponent<P>
): React.StatelessComponent<P & TWithBeforeAfterProps> {
  // tslint:disable-next-line:no-any
  return ({ withWrapper, withAfter, withBefore, ...others }: any) => {
    const wrappedComponent = <WrappedComponent {...others} />;
    const BeforeComponent = WrapPlainString(withBefore);
    const AfterComponent = WrapPlainString(withAfter);

    if (withWrapper) {
      const Wrapper = withWrapper;
      return <Wrapper>{BeforeComponent}{wrappedComponent}{AfterComponent}</Wrapper>;
    }
    return (withAfter || withBefore)
      ? <WrapperComponent>{BeforeComponent}{wrappedComponent}{AfterComponent}</WrapperComponent>
      : wrappedComponent;
  };
}

export default withBeforeAfter;