import React from 'react';
import './SigninSignupStyles.scss';
import Signin from '../../signin/SigninComponent'
import Signup from '../../Signup/SignupComponent'

 const SigninSignup = () => {
    return (
        <div className='sign-in-and-sign-up'>
           <Signin />
            <Signup/>
        </div>
    )
}


export default SigninSignup;