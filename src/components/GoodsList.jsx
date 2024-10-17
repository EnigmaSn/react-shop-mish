import { GoodsItem } from './GoodsItem';
const GoodsList = (props) => {
  const { goods = [] } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="grid grid-cols-autofill justify-center gap-5">
      {goods.map((item) => {
        return <GoodsItem key={item.mainId} {...item} />;
      })}
    </div>
  );
};

export { GoodsList };
