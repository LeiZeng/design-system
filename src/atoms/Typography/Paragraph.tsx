import * as React from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

export interface IParagraphProps extends IAtomProps {
  children: React.ReactNode;
}

const Paragraph = styled.p`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  font-size: 1rem;
  line-height: 1.3;
  margin: 1rem 0 0;
`;

export default (props: IParagraphProps) => <Paragraph {...props} />;