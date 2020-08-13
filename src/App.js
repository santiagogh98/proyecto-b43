import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from './containers/Landing';
import Turista from './containers/Turista';
import Negocio from './containers/Negocio';
import TuristaFood from './containers/turistaFood';

function App() {
  return (
      <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/turista" component={Turista}></Route>
        <Route exact path="/negocio" component={Negocio}></Route>
        <Route exact path="/turistaFood" component={TuristaFood}></Route>

      </Switch>
      
      </BrowserRouter>
   
   
    
  );
}

export default App;