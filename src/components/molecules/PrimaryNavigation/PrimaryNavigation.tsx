import * as React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';

import Link from '../../../components/atoms/Link/Link';

export interface IPrimaryNavProps {

}

const Nav = styled.nav`
  display: flex;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  a {
    font-weight: 300;
    color: ${palette('grayscale', 2)};
    font-size: 1.25rem;
    &.active {
      color: ${palette('grayscale', 0)};
    }
  }
`;

export default (props: IPrimaryNavProps) => (
  <Nav {...props}>
    <li><Link to="/" exact={true} activeClassName="active">Home</Link></li>
    <li><Link to="/sample-page" activeClassName="active">Sample page</Link></li>
  </Nav>
);