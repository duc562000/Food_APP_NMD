import {PUSHNOTI, HIDENOTI, INCREASE, DECREASE} from '../actions/actionTypes';

const initialState = 0;
// @ts-ignore

export default function CountReaducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE: {
      return state + 1;
    }
    case DECREASE: {
      return state - 1;
    }
    default:
      return state;
  }
}
