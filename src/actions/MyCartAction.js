import { DECREASE_ITEM_CART, INCREASE_ITEM_CART } from "./actionTypes";


  
  export const increaseItem = () => {
    return {
      type: INCREASE_ITEM_CART,
    };
  };
  
  export const decreaseItem = () => {
    return {
      type: DECREASE_ITEM_CART
    };
  };