import React from "react"
import "./App.css";
import { Switch,Route } from 'react-router-dom';

import Homepage from './components/pages/homepage/Homepage.component';
import Shoppage from './components/pages/shop/Shoppage';
import Header from './components/Header/HeaderComponent';
import SigninSignup from './components/pages/Signinsignup/SigninSignupComponent'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={Shoppage} />
      <Route path='/signin' component={SigninSignup} />
    
     </Switch>
    </div>
  );
}

export default App;
