import { ADD_ITEM_CART, DECREASE_ITEM_CART, INCREASE_ITEM_CART } from "./actionTypes";


  
  export const increaseItem = (payload) => {
    return {
      type: INCREASE_ITEM_CART,
      payload
    };
  };
  
  // export const decreaseItem = () => {
  //   return {
  //     type: DECREASE_ITEM_CART
  //   };
  // };
  export const addCart = (payload) => {
    return {
      type: ADD_ITEM_CART,
      payload
    };
  };