import cartActionTypes from './cartTypes';
import { addItemsToCart} from './cartUtils';

const Initialstate ={
    hidden:true,
    cartItems:[]
}


const cartReducer =(state = Initialstate,action) =>{
    switch(action.type){

    case cartActionTypes.TOGGLE_CART_HIDDEN:
        return{
            ...state,
            hidden:!state.hidden
        }

        case cartActionTypes.ADD_ITEM:
        return{
            ...state,
            cartItems: addItemsToCart(state.cartItems, action.payload)
        }
        default:
            return state


    }
   
    
}

export default cartReducer;