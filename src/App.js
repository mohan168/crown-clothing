import React from "react"
import "./App.css";
import { Switch,Route } from 'react-router-dom';

import Homepage from './components/pages/homepage/Homepage.component';
import Shoppage from './components/pages/shop/Shoppage';
import Header from './components/Header/HeaderComponent';
import SigninSignup from './components/pages/Signinsignup/SigninSignupComponent'
import {auth } from './components/firebase/firebaseUtils';
import { render } from "@testing-library/react";


class App extends React.Component {
  constructor(){
    super();

    this.state ={
      currentuser :null
    }
  }

  unsubscribefromAuth = null;

  componentDidMount (){
    this.unsubscribefromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentuser:user})
      console.log(user);
    })
  }

  componentWillUnmount (){
    this.unsubscribefromAuth();
  }

  
 
  render(){
    return (
      <div className="App">
        <Header currentuser={this.state.currentuser} ></Header>
        <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shoppage} />
        <Route path='/signin' component={SigninSignup} />
      
       </Switch>
      </div>
    );
  }
}


export default App;
