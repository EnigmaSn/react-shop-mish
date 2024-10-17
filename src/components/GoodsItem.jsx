const GoodsItem = (props) => {
  const {
    offerId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    addToBasket = Function.prototype
  } = props;
  return (
    <>
      <div className="card flex flex-col" id={offerId}>
        <div className="card-image">
          {displayAssets[0].url === null ? (
            <img src={`https://placehold.co/300x450?text=${displayName}`} alt={displayName} />
          ) : (
            <img src={displayAssets[0].url} alt={displayName} />
          )}
        </div>
        <div className="card-content grow">
          <span className="card-title">{displayName}</span>
          <p>{displayDescription}</p>
        </div>
        <div className="card-action">
          <button
            className="btn"
            onClick={() => {
              addToBasket({
                offerId,
                displayName,
                price
              });
            }}>
            Купить
          </button>
          <span className="right text-3xl">{price.finalPrice} руб.</span>
        </div>
      </div>
    </>
  );
};

export { GoodsItem };
