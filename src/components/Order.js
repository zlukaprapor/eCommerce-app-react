import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';

export default class Order extends Component {
  render() {
    const { id, img, price, title } = this.props.item;

    return (
      <div className="item">
        <img alt={'image' + id} src={require('../img/' + img)} />
        <h2>{title}</h2>
        <p>{new Intl.NumberFormat().format(price)}Грн</p>
        <FaTrash
          className="delete-icon"
          onClick={() => this.props.onDelete(id)}
        />
      </div>
    );
  }
}
