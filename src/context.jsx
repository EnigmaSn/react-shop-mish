import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

const ShopContext = createContext();

const initialState = {
  goods: [],
  isLoading: true,
  order: [],
  isBasketShow: false,
  alertName: ''
};

const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.loadGoods = (data) => {
    dispatch({ type: 'LOAD_GOODS', payload: data });
  };

  value.stopLoading = () => {
    dispatch({ type: 'STOP_LOADING' });
  };

  value.handleBasketShow = () => {
    dispatch({ type: 'TOGGLE_BASKET' });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: itemId });
  };

  value.addToBasket = (item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item });
  };

  value.incQuantity = (itemId) => {
    dispatch({ type: 'INC_QUANTITY', payload: itemId });
  };

  value.decQuantity = (itemId) => {
    dispatch({ type: 'DEC_QUANTITY', payload: itemId });
  };

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export { ShopContext, ContextProvider };
