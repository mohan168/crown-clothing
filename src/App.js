import React from "react"
import "./App.css";
import { Switch,Route } from 'react-router-dom';

import Homepage from './components/pages/homepage/Homepage.component';
import Shoppage from './components/pages/shop/Shoppage';
import Header from './components/Header/HeaderComponent';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={Shoppage} />
    
     </Switch>
    </div>
  );
}

export default App;
