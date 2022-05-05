import {HEART_RESTAURANT} from '../actions/actionTypes';

const initialState = {
    favotiteList: [],
};
// @ts-ignore


export default function FavoriteReducer(state = initialState, action) {
  switch (action.type) {
    case HEART_RESTAURANT: {
        const productInStore = state.favotiteList.find(
            item => item.id === action.payload.id
        )
        if (!productInStore) {
            let newList = {
                ...action.payload,
                favorite: true
            }
            return {
                favotiteList: [...state.favotiteList, newList]
            }
        } else {
            let newStore = state.favotiteList
            const objIndex = newStore.findIndex(
                obj => obj.id == action.payload.id
            )

            if (newStore[objIndex].favorite) {
                newStore[objIndex].favorite = false
                // return {
                //     ...state,
                //     favotiteList: state.favotiteList.filter((item) => item.id !== action.payload.id)
                // }
            } 
            else {
                newStore[objIndex].favorite = true
            }
            
            return {
                favotiteList: [...newStore]
            }
        }
    }
    
    
    default:
      return state;
  }
}