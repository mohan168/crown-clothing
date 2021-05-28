import React from "react";

import './CartDropdownstyles.scss'

import CustomButton from '../Custombutton/CustomButton';


const CartDropdown =() => (
    <div className ='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton >Go To CheckOut</CustomButton>
        </div>
)


export default CartDropdown;