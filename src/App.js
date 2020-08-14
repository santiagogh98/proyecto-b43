import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from './containers/Landing';
import Turista from './containers/Turista';
import Negocio from './containers/Negocio';
import TuristaFood from './containers/TuristasFood';
import TuristaActividad from './containers/TuristaActividad';
import Actividad from './containers/Actividad';
import itinerario from './containers/itinerario';
import SignIn from './containers/SignIn';


function App() {
  return (
      <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/turista" component={Turista}></Route>
        <Route exact path="/negocio" component={Negocio}></Route>
        <Route exact path="/actividad" component={Actividad}></Route>
        <Route exact path="/TuristaFood" component={TuristaFood}></Route>
        <Route exact path="/TuristaActivity" component={TuristaActividad}></Route>
        <Route exact path="/Itinerario" component={itinerario}></Route>
        <Route exact path="/SignIn" component={SignIn}></Route>



      </Switch>
      
      </BrowserRouter>
   
   
    
  );
}

export default App;