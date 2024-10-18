import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShop] = useState(false);

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

  const handleBasketShow = () => {
    setBasketShop(() => {
      return !isBasketShow;
    });
  };

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

  const removeFromBasket = (itemId) => {
    console.log(`removeFromBasket`);
    const newOrder = order.filter((el) => {
      return el.offerId !== itemId;
    });
    setOrder(newOrder);
  };

  const incQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.offerId === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity
        };
      } else {
        return el;
      }
    });

    setOrder(newOrder);
  };

  const decQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.offerId === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity > 0 ? newQuantity : 0
        };
      } else {
        return el;
      }
    });

    setOrder(newOrder);
  };

  // const incQuantity = (itemId) => {
  //   const newOrder = order.map((el) => {
  //     if (el.offerId === itemId) {
  //       const newQuantity = el.quantity + 1;
  //       return {
  //         ...el,
  //         quantity: newQuantity
  //       };
  //     } else {
  //       return el;
  //     }
  //   });
  //   setOrder(newOrder);
  // };
  // const decQuantity = (itemId) => {
  //   const newOrder = order.map((el) => {
  //     if (el.offerId === itemId) {
  //       const newQuantity = el.quantity - 1;
  //       return {
  //         ...el,
  //         quantity: newQuantity >= 0 ? newQuantity : 0
  //       };
  //     } else {
  //       return el;
  //     }
  //   });
  //   setOrder(newOrder);
  // };
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
    </>
  );
};

export { Shop };
