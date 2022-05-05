import {PUSHNOTI, HIDENOTI, INCREASE, DECREASE, INCREASE_ITEM_CART, DECREASE_ITEM_CART, ADD_ITEM_CART, DELETE_ITEM_CART, PAY_TO_ORDER, REST_CART} from '../actions/actionTypes';
import { FoodTypeData } from '../Screens/home/Home';

const initialState = {
    numberItem:0,
    cart:[],
    oderList: [],
    cartDefault:[]
};
// @ts-ignore

export default function MyCartReaducer(state = initialState, action) {
    // console.log(state.cart[action.payload].count);
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
            state.cart[action.payload - 1].count++
            
            return {
            ...state,
            }
        }
        case DECREASE_ITEM_CART: {
            const newList=state.cart.map(e=>{
                if(e.id==action.payload){
                    return {...e,count: e.count-1}
                } else {
                  return {...e}
                }
              }
              )
              const data=newList.filter(e=>e.count>0)
              return {
                ...state,
                cart: data,
                numberItem:state.numberItem - 1
              }
            }

        case DELETE_ITEM_CART:
            let quantity_ = state.cart[action.payload].count;
            return{
                ...state,
                numberItem:state.numberItem - quantity_,
                cart :state.cart.filter(item=>{
                    return item.id!=state.cart[action.payload].id
                })
                
            }
        case PAY_TO_ORDER:
            const OrderInList = state.oderList.find(
                item => item.id === action.payload.id
            )
                return {
                    ...state,
                    oderList: [...action.payload],
                    cart : state.cart = []
                }
        default:
        return state;
    }
}
