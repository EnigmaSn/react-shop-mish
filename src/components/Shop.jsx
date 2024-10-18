import { useContext, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';
import { ShopContext } from '../context';

const Shop = () => {
  const {
    isBasketShow,
    handleBasketShow,
    goods,
    isLoading,
    order,
    alertName,
    loadGoods,
    closeAlert,
    stopLoading,
    removeFromBasket,
    addToBasket,
    incQuantity,
    decQuantity
  } = useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY
      }
    })
      .then((res) => res.json())
      .then((data) => {
        data.shop && loadGoods(data.shop);
        stopLoading();
      });
  }, []);

  return (
    <>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {isLoading ? <Preloader /> : <GoodsList addToBasket={addToBasket} goods={goods} />}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </>
  );
};

export { Shop };
