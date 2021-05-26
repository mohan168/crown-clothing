import {combineReducers } from 'redux';

import UserReducer from './user/userreducer';


export default combineReducers ({
    user :UserReducer
})

