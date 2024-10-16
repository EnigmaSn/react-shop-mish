import { useContext } from 'react';
import { ShopContext } from '../context';

const BasketItem = (props) => {
  const { offerId, displayName, price, quantity } = props;

  const { removeFromBasket, incQuantity, decQuantity } = useContext(ShopContext);

  return (
    <li className="collection-item">
      {displayName} x {quantity} = {price.finalPrice * quantity} руб.
      <span
        className="waves-effect waves-light btn teal mx-2 cursor-pointer"
        onClick={() => incQuantity(offerId)}>
        <i className="material-icons">add</i>
      </span>
      <span
        className="waves-effect waves-light btn red cursor-pointer"
        onClick={() => decQuantity(offerId)}>
        <i className="material-icons">remove</i>
      </span>
      <span className="secondary-content cursor-pointer" onClick={() => removeFromBasket(offerId)}>
        <i className="material-icons">close</i>
      </span>
    </li>
  );
};

export { BasketItem };
