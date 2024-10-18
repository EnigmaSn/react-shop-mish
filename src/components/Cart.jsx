import { useContext } from 'react';
import { ShopContext } from '../context';

const Cart = () => {
  const { order, handleBasketShow } = useContext(ShopContext);
  return (
    <div
      onClick={handleBasketShow}
      className="cart blue darken-4 white-text md:top-18 line-h fixed bottom-8 right-8 z-10 cursor-pointer px-4 py-3
        leading-none md:bottom-auto">
      <i className="material-icons">shopping_cart</i>
      {order.length ? <span>{order.length}</span> : null}
    </div>
  );
};

export { Cart };
