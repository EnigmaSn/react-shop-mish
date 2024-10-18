const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOAD_GOODS':
      return { ...state, goods: payload };
    case 'STOP_LOADING':
      return {
        ...state,
        isLoading: false
      };
    case 'TOGGLE_BASKET':
      return {
        ...state,
        isBasketShow: !state.isBasketShow
      };
    case 'ADD_TO_BASKET': {
      const itemIndex = state.order.findIndex((orderItem) => orderItem.offerId === payload.offerId);

      let newOrder = null;

      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1
            };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.displayName
      };
    }

    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((el) => {
          return el.offerId !== payload;
        })
        // TODO
      };
    case 'INC_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.offerId === payload) {
            const newQuantity = el.quantity + 1;
            return {
              ...el,
              quantity: newQuantity
            };
          } else {
            return el;
          }
        })
      };
    case 'DEC_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.offerId === payload) {
            const newQuantity = el.quantity - 1;
            return {
              ...el,
              quantity: newQuantity > 0 ? newQuantity : 0
            };
          } else {
            return el;
          }
        })
      };
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: ''
      };
    default:
      return state;
  }
};

export { reducer };
