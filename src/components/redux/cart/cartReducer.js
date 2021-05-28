const Initialstate ={
    hidden:true
}


const cartReducer =(state = Initialstate,action) =>{
    switch(action.type){

    case 'TOGGLE_CART_HIDDEN':
        return{
            ...state,
            hidden:!state.hidden
        }
        default:
            return state


    }
   
    
}

export default cartReducer;