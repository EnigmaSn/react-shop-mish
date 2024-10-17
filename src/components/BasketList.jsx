import { BasketItem } from './BasketItem';

const BasketList = (props) => {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype
  } = props;

  const totalOrderPrice = order.reduce((acc, item) => {
    return acc + item.price.finalPrice * item.quantity;
  }, 0);

  return (
    <ul className="collection with-header fixed inset-x-1/2 inset-y-1/2 h-fit w-1/2 -translate-x-1/2 -translate-y-1/2 border-none shadow-2xl duration-500 ease-out">
      <li className="collection-item active">
        Корзина
        <span onClick={handleBasketShow} className="secondary-content cursor-pointer">
          <i className="material-icons">close</i>
        </span>
      </li>
      {order.length ? (
        order.map((item) => {
          return (
            <BasketItem
              key={item.offerId}
              {...item}
              removeFromBasket={removeFromBasket}
              className="collection-item"
            />
          );
        })
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">Общая стоимость: {totalOrderPrice} руб.</li>
    </ul>
  );
};

export { BasketList };
