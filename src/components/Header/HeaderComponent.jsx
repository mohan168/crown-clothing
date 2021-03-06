import React from 'react';
import './HeaderStyles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import {auth } from '../../components/firebase/firebaseUtils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/CarticonComponent';
import CartDropdown from '../CartDropdown/CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../redux/cart/cartSelector';
import { selectCurrentUser } from '../redux/user/userselector';


const Header = ({currentuser ,hidden}) => {
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
              <CartIcon/>
            </div>
            { hidden ? null :
            <CartDropdown/>}
            
        </div>
    )
}

const mapStateToProps =createStructuredSelector({
    currentuser : selectCurrentUser,
    hidden:selectCartHidden

})

export default  connect(mapStateToProps)(Header);