import {PUSHNOTI, HIDENOTI, INCREASE, DECREASE, INCREASE_ITEM_CART, DECREASE_ITEM_CART, ADD_ITEM_CART} from '../actions/actionTypes';
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
        case ADD_ITEM_CART:
                if(state.numberItem === 0){
                    let Newcart = {
                        id:action.payload.id,
                        count:1,
                        type:action.payload.type,
                        img:action.payload.img,
                        price:action.payload.price,
                        buy:action.payload.buy,
                        like:action.payload.like
                    }
                    state.cart.push(Newcart);
                }
                else{
                    let check = false;
                    state.cart.map((item,key)=>{
                        if(item.id === action.payload.id){
                            state.cart[key].count++;
                            check=true;
                        }
                    });
                    if(!check){
                        let _cart = {
                            id:action.payload.id,
                            count:1,
                            type:action.payload.type,
                            img:action.payload.img,
                            price:action.payload.price,
                            buy:action.payload.buy,
                            like:action.payload.like
                        }
                        state.cart.push(_cart);
                    }
                }
                return{
                    ...state,
                    numberItem:state.numberItem + 1
                }
        case INCREASE_ITEM_CART: {
            state.numberItem++
            state.cart[action.payload - 1].quantity++
            
            return {
            ...state,
            }
        }
        default:
        return state;
    }
}
