import React from 'react';
import './CustomButtonStyles.scss'

 const CustomButton =({children, isGoogleSignIn,inverted,...otherprops}) => {
    return (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : '' } 
        custom-button `} {...otherprops}>
      {children}
            
        </button>
    )
}

export default CustomButton;
