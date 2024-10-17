import { GoodsItem } from './GoodsItem';
const GoodsList = (props) => {
  const { goods = [], addToBasket = Function.prototype } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="grid grid-cols-autofill justify-center gap-5">
      {goods.map((item) => {
        return <GoodsItem key={item.offerId} {...item} addToBasket={addToBasket} />;
      })}
    </div>
  );
};

export { GoodsList };
