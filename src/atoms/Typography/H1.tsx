import * as React from 'react';
import styled from 'styled-components';
import { ITheme } from '../../themes/index';

interface IH1Props {
  theme: ITheme;
}
// var a:StyledComponentClass<IH1Props, ITheme>

const H1 = styled.h1`
  font-size: ${props => props.theme.typography.H1.fontSize || '1.5em'};
  text-align: center;
  color: palevioletred;
`;

export default (props: IH1Props) => <H1 {...props}/>;