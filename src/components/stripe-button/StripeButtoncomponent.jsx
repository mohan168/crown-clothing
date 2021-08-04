import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({ price }) => {
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_51JKcpxSFTBYc6CSROq6JWBQanjEKOy1SB0rXr7QlAXGEydKBiFRQYk1NPvcZbMDATMIOQnfnXCOXPfPoMaDBgMjh00Q8J0Dr5a';

    const onToken = token =>{
    console.log(token);
    alert('Payment Successful');
    }

    return(
        <StripeCheckout 
        
        label='Pay Now'
        name ='CRWN clothing Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token ={onToken}
        stripeKey={publishableKey}
        
        
        />

       
    )

}

export default StripeCheckoutButton;