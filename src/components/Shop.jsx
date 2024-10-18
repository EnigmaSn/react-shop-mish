import { useContext, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';
import { ShopContext } from '../context';

const Shop = () => {
  const { isBasketShow, isLoading, alertName, loadGoods, stopLoading } = useContext(ShopContext);

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
      <Cart />
      {isLoading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </>
  );
};

export { Shop };
