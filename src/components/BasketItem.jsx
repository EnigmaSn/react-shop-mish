const BasketItem = (props) => {
  const { offerId, displayName, price, quantity, removeFromBasket } = props;
  return (
    <li className="collection-item">
      {displayName} x {quantity} = {price.finalPrice * quantity} руб.
      <span className="secondary-content cursor-pointer" onClick={() => removeFromBasket(offerId)}>
        <i className="material-icons">close</i>
      </span>
    </li>
  );
};

export { BasketItem };
