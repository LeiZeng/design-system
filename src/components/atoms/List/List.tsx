import * as React from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

export interface ISortableContainer {
  items: object[];
}
export interface ISortableElement {
  value: React.ReactNode;
}
export interface IListProps {
  theme?: ITheme;
  palette?: string;
  reverse?: boolean;
}

const Ul = styled.ul`
  font-family: ${font('primary')};
  margin: 1rem 0;
  padding-left: 1.6rem;
  line-height: 1.7rem;
  color: ${palette({ grayscale: 0 }, 1)};
`;
const List = (props: IListProps) => <Ul {...props} />;

const SortableItem = SortableElement(({value}: ISortableElement) =>
  <li>{value}</li>
);

export default SortableContainer(({ items, palette = 'grayscale', ...props }: IListProps & ISortableContainer) => (
  <List {...props} palette={palette}>
    {items.map((value, index) => (
      <SortableItem key={`item-${index}`} index={index} value={value} />
    ))}
  </List>
));