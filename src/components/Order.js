import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';

export default class Order extends Component {
  render() {
    return (
      <div className="item">
        <img
          alt={'image' + this.props.item.id}
          src={'./img/' + this.props.item.img}
        />
        <h2>{this.props.item.title}</h2>
        <p>{new Intl.NumberFormat().format(this.props.item.price)}Грн</p>
        <FaTrash
          className="delete-icon"
          onClick={() => this.props.onDelete(this.props.item.id)}
        />
      </div>
    );
  }
}
