import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY
      }
    })
      .then((res) => res.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Cart quantity={order.length} />
      {isLoading ? <Preloader /> : <GoodsList goods={goods} />}
    </>
  );
};

export { Shop };
