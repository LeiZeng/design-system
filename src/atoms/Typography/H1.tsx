import * as React from 'react';
import styled from 'styled-components';

type IH1Props = {
  theme: ITheme;
};

const H1 = styled.h1`
  font-size: ${(props: IH1Props) => props.theme.typography.H1.fontSize || '1.5em'};
  text-align: center;
  color: palevioletred;
`;

export default (props: IH1Props) => <H1 {...props} />;