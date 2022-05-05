import { HEART_RESTAURANT } from './actionTypes';
  
  export const toggleHeart = (payload, heart) => {
    return {
      type: HEART_RESTAURANT,
      payload,
      heart
    };
  };
