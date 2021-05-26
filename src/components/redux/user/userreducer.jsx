import { userActionTypes } from './usertypes';
 
 
 const InitialState ={
    currentuser :null
 }

 const UserReducer = (state=InitialState,action) =>{
     switch(action.type){
         case userActionTypes.SET_CURRENT_USER:
             return{
                 ...state,
                 currentuser :action.payload
             }
             default:
             return state;
     }
    
 }

 export default UserReducer;