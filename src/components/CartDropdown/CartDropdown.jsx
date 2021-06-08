import React from "react";

import './CartDropdownstyles.scss';
import { connect } from 'react-redux';
import  { selectCartItems} from '../redux/cart/cartSelector';

import CustomButton from '../Custombutton/CustomButton';
import CartItem from '../cartitem/cartItemComponent';


const CartDropdown =( { cartItems }) => (
    <div className ='cart-dropdown'>
        
      
        <div className='cart-items' >
        {
            cartItems.map( (cartItem)=>(
                <CartItem key ={cartItem.id} item={ cartItem }/>
            ))
        }
        </div>
        <CustomButton >Go To CheckOut</CustomButton>
        </div>
)

const mapStateToProps =(state) =>({
   cartItems : selectCartItems(state)
})


export default connect(mapStateToProps)(CartDropdown);