
import styled from 'styled-components';
import { ITheme } from '../../themes/index';
import { IColorProps, getColor } from '../../themes/default';

type TColorProps = {
  theme: ITheme;
  width?: string;
  height?: string;
} & IColorProps;

export default styled.span`
  display: block;
  width: ${({width = '200px'}: TColorProps) => width};
  height: ${({height = '40px'}: TColorProps) => height};
  background: ${(props: TColorProps) => {
    const colorKey = Object.keys(props)
      .find(key => props[key] && props.theme.colors[key]) || 'primary';
    return getColor(colorKey, props[colorKey]);
  }};
`;