import React, { Component } from 'react';

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img
          alt={'image' + this.props.item.id}
          src={'./img/' + this.props.item.img}
        />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <p>{new Intl.NumberFormat().format(this.props.item.price)}Грн</p>
        <div
          className="add-to-cart"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          +
        </div>
      </div>
    );
  }
}
