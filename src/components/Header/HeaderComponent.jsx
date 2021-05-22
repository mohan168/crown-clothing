import React from 'react';
import './HeaderStyles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import {auth } from '../../components/firebase/firebaseUtils'

const Header = ({currentuser}) => {
    return (
        <div  className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentuser ?
                <div className='option' onClick={() => auth.signOut()}> Sign Out</div>
                :
                <Link className='option' to='/signin'>Sign In</Link>
            }
            </div>
            
        </div>
    )
}

export default Header;