import React from "react"
import "./App.css";
import { Switch,Route ,Redirect} from 'react-router-dom';
import {connect } from 'react-redux';


import Homepage from './components/pages/homepage/Homepage.component';
import Shoppage from './components/pages/shop/Shoppage';
import Header from './components/Header/HeaderComponent';
import SigninSignup from './components/pages/Signinsignup/SigninSignupComponent'
import {auth, createUserProfileDocument } from './components/firebase/firebaseUtils';
import {setCurrentUser} from './components/redux/user/UserActions'



class App extends React.Component {
  
  

  unsubscribefromAuth = null;

  componentDidMount (){
     const { setCurrentUser} = this.props;
    this.unsubscribefromAuth = auth.onAuthStateChanged(async (userAuth) => {
    
      if(userAuth){
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot(snapShot =>{
            setCurrentUser ({
                     id:snapShot.id,
                     ...snapShot.data()

             })
           
           // console.log(this.state);
          })
        }

       setCurrentUser(
        userAuth
       )
      
    })
    }

  componentWillUnmount (){
    this.unsubscribefromAuth();
  }

  
 
  render(){
    return (
     
      <div className="App">

        <Header></Header>
        <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shoppage} />
        <Route exact path='/signin' render={ ()=>this.props.currentuser ? (<Redirect to= '/' /> ) : (<SigninSignup/>) }/>
      
       </Switch>
      </div>
      
    );
  }
}



const mapStateToProps =( {user}) =>({
  currentuser : user.currentuser
})

const maptDispatchToProps =(dispatch )=>({
  setCurrentUser: user=>  dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,maptDispatchToProps)( App);
