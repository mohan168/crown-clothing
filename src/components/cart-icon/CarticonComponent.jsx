import React from 'react';

import { connect } from 'react-redux';

import { toggleCartHidden} from '../redux/cart/cartactions'

import { ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';

import './CartIconStyles.scss';


const CartIcon =({ toggleCartHidden}) => (
    <div className='cart-icon' onClick={ toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>

    </div>
)

const mapDispatchToProps =(dispatch) =>({

    toggleCartHidden : () => dispatch(toggleCartHidden())

})


export default connect(null,mapDispatchToProps)(CartIcon);