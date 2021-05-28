import {combineReducers } from 'redux';

import UserReducer from './user/userreducer';
import cartReducer from './cart/cartReducer';



export default combineReducers ({
    user :UserReducer,
    cart: cartReducer
})

