import React from 'react';
import './CustomButtonStyles.scss'

 const CustomButton =({children, ...otherprops}) => {
    return (
        <button className='custom-button' {...otherprops}>
      {children}
            
        </button>
    )
}

export default CustomButton;
