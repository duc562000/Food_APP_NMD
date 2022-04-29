import {PUSHNOTI, HIDENOTI, INCREASE, DECREASE, INCREASE_ITEM_CART, DECREASE_ITEM_CART} from '../actions/actionTypes';
import { FoodTypeData } from '../Screens/home/Home';
const FoodData = FoodTypeData[1].menuNearMe[0].food

const initialState = {
    numberItem:0,
    cart:[],
    products:FoodData
};
// @ts-ignore

export default function MyCartReaducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
            if(state.numberItem==0){
                let Newcart = {
                    id:action.payload.id,
                    quantity:1,
                    name:action.payload.name,
                }
                state.cart.push(Newcart);
            }
            else{
                let check = false;
                state.Newcart.map((item,key)=>{
                    if(item.id==action.payload.id){
                        state.Newcart[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.payload.id,
                        quantity:1,
                        name:action.payload.name,
                        image:action.payload.image,
                        price:action.payload.price
                    }
                    state.Newcart.push(_cart);
                }
            }
            return{
                ...state,
                numberCart:state.numberItem+1
            }
    case INCREASE_ITEM_CART: {
      console.log(state.numberItem)
      return state.numberItem + 1;
    }
    case DECREASE_ITEM_CART: {
      return state.numberItem - 1;
    }
    default:
      return state;
  }
}
