import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Items } from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'SAMSUNG Galaxy S2',
          img: 'Samsung.webp',
          desc:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
          category: 'mobil',
          price: '36244',
        },
        {
          id: 2,
          title: 'APPLE iPhone 11',
          img: 'apple.webp',
          desc:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
          category: 'mobil',
          price: '22499',
        },
        {
          id: 3,
          title: 'XIAOMI Redmi 9A',
          img: 'xiaomi.webp',
          desc:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
          category: 'mobil',
          price: '3999',
        },
        {
          id: 4,
          title: 'REALME Narzo 50A',
          img: 'narzo.webp',
          desc:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
          category: 'mobil',
          price: '6244',
        },
        {
          id: 5,
          title: 'OPPO A57s',
          img: 'oppo.webp',
          desc:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
          category: 'mobil',
          price: '7500',
        },
        {
          id: 6,
          title: 'VIVO Y33s',
          img: 'img_0_60_8389_3_1.webp',
          desc:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
          category: 'mobil',
          price: '3100',
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray)
      this.setState({
        orders: [...this.state.orders, item],
      });
  }
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }
}

export default App;
