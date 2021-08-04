import React from 'react';
import './checkoutstyles.scss';
import { connect} from  'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCartItems , selectCartTotal}  from '../../redux/cart/cartSelector';
import CheckoutItem from '../../checkoutitem/checkoutitemcomponent'
import StripeCheckoutButton from '../../stripe-button/StripeButtoncomponent'

 const Checkout = ({ cartItems,total })  => (
    
        <div className='checkout-page' >
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            
            {
                cartItems.map(cartItem => (
                   <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <div className='total'>
                <span > Total :${total}</span>
            </div>
            <div className='test-warning'>
                * please use the following credentials for payment:
                <br />
                4242 4242 4242 4242 Exp: 01/22 CVV : 123

            </div>
            <StripeCheckoutButton price={total}/ >
        </div>
    )


    const mapStateToProps = createStructuredSelector({
        cartItems: selectCartItems,
        total:selectCartTotal
    })

export default connect(mapStateToProps)(Checkout);