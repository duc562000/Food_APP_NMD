import { DECREASE, INCREASE } from "./actionTypes";

  
  export const increase = () => {
    return {
      type: INCREASE,
    };
  };
  
  export const decrease = () => {
    return {
      type: DECREASE
    };
  };