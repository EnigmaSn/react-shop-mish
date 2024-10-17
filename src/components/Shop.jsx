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

  // const addToBasket = (item) => {
  //   const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

  //   if (itemIndex < 0) {
  //     const newItem = {
  //       ...item,
  //       quantity: 1
  //     };
  //     setOrder([...order, newItem]);
  //   } else {
  //     const newOrder = order.map((orderItem, index) => {
  //       if (index === itemIndex) {
  //         return {
  //           ...orderItem,
  //           quantity: orderItem.quantity + 1
  //         };
  //       } else {
  //         return orderItem;
  //       }
  //     });

  //     setOrder(newOrder);
  //   }
  // };

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.offerId === item.offerId);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
  };

  return (
    <>
      <Cart quantity={order.length} />
      {isLoading ? <Preloader /> : <GoodsList addToBasket={addToBasket} goods={goods} />}
    </>
  );
};

export { Shop };
