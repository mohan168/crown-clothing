import React from "react";

import './CartDropdownstyles.scss';
import { connect } from 'react-redux';
import  { selectCartItems} from '../redux/cart/cartSelector';
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CustomButton from '../Custombutton/CustomButton';
import CartItem from '../cartitem/cartItemComponent';
import { toggleCartHidden } from '../redux/cart/cartactions'


const CartDropdown =( { cartItems ,history,dispatch}) => (
    <div className ='cart-dropdown'>
        
      
        <div className='cart-items' >
        {
            cartItems.length ?
            cartItems.map( (cartItem)=>(
                <CartItem key ={cartItem.id} item={ cartItem }/>
            ))
            : 
            <span className="empty-message">Your Cart is Empty</span>
        }
        </div>
        <CustomButton onClick={() => {history.push('/checkout');
        dispatch(toggleCartHidden());    
    }
    
    }>Go To CheckOut</CustomButton>
        </div>
)

const mapStateToProps =createStructuredSelector({
   cartItems : selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));