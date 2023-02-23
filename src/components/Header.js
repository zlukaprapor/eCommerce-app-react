// @flow
import * as React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Order from './Order';

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} onDelete={props.onDelete} />
      ))}
      <p className="summa">Сума: {new Intl.NumberFormat().format(summa)}Грн</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Товар відсутній</h2>
    </div>
  );
};
export function Header(props) {
  let [cartOpen, setCartOpen] = React.useState(false);

  return (
    <header>
      <div>
        <span className="logo">eCommerce</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакти</li>
          <li>Кабінет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && 'active'}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"> </div>
    </header>
  );
}
