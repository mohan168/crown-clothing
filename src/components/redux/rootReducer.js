import {combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import  storage  from 'redux-persist/lib/storage';
import directoryReducer from './directory/directoryReducer';
import UserReducer from './user/userreducer';
import cartReducer from './cart/cartReducer';
import shopReducer from './shop/shopReducer';

const persistConfig ={
    key:'root',
    storage,
    whitelist: ['cart']

}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop:shopReducer
})

export default persistReducer(persistConfig,rootReducer);

