import styled from 'styled-components';
import { ITheme } from '../../themes/index';

type IH1Props = {
  theme: ITheme;
};

export default styled.h1`
  font-size: ${(props: IH1Props) => props.theme.typography.H1.fontSize || '1.5em'};
  text-align: center;
  color: palevioletred;
`;