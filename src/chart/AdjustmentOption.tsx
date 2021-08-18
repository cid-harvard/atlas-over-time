import React from 'react';
import styled from 'styled-components';

const Unselected = styled.li`
  &:hover {
    background-color: rgb(220, 239, 243);
  }
`;

const Selected = styled(Unselected)`
  font-weight: 700;
`;

interface IProps<T> {
  selected: T;
  assigned: T;
  label: string;
  onClick: (value: T) => void;
}

export default class<T> extends React.Component<IProps<T>> {
  private onClick = () => this.props.onClick(this.props.assigned);

  render() {
    const {label, selected, assigned} = this.props;

    const Root = (selected === assigned) ? Selected : Unselected;

    return (
      <Root onClick={this.onClick}>{label}</Root>
    );
  }
}
