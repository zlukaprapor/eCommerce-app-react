import React, { Component } from 'react';
import { Item } from './Item';

export class Items extends Component {
  render() {
    const { items } = this.props;

    return (
      <main>
        {items.map((el) => (
          <Item key={el.id} item={el} onAdd={this.props.onAdd} />
        ))}
      </main>
    );
  }
}
