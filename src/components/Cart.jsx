const Cart = ({ quantity, handleBasketShow = Function.prototype }) => {
  return (
    <div
      onClick={handleBasketShow}
      className="cart blue darken-4 white-text md:top-18 line-h fixed bottom-8 right-8 z-10 cursor-pointer px-4 py-3
        leading-none md:bottom-auto">
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span>{quantity}</span> : null}
    </div>
  );
};

export { Cart };
