import { ADD_ITEM_CART, DECREASE_ITEM_CART, DELETE_ITEM_CART, INCREASE_ITEM_CART, PAY_TO_ORDER, REST_CART } from "./actionTypes";


  
  export const increaseItem = (payload) => {
    return {
      type: INCREASE_ITEM_CART,
      payload
    };
  };
  
  export const decreaseItem = (payload) => {
    return {
      type: DECREASE_ITEM_CART,
      payload
    };
  };
  export const addCart = (payload) => {
    return {
      type: ADD_ITEM_CART,
      payload
    };
  };
  export const deleteItem = (payload) => {
    return {
      type: DELETE_ITEM_CART,
      payload
    };
  };
  export const payToOrder = (payload) => {
    return {
      type: PAY_TO_ORDER,
      payload
    };
  };

  export const resetCart = (payload) => {
    return {
      type: REST_CART,
      payload
    };
  };