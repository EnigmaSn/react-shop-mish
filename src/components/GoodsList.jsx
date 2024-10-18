import { useContext } from 'react';
import { ShopContext } from '../context';
import { GoodsItem } from './GoodsItem';

const GoodsList = () => {
  const { goods } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="grid grid-cols-autofill justify-center gap-5">
      {goods.map((item) => {
        return <GoodsItem key={item.offerId} {...item} />;
      })}
    </div>
  );
};

export { GoodsList };
