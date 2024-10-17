const Cart = ({ quantity }) => {
  return (
    <div className="cart blue darken-4 white-text md:top-18 fixed bottom-8 right-8 z-10 cursor-pointer px-4 py-3 md:bottom-auto">
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span>{quantity}</span> : null}
    </div>
  );
};

export { Cart };
