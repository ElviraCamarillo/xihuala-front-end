import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


/* import Index from './pages/Index'
import Login from './pages/Login'
import Signin from './pages/Signin'
import ForgotPassword from './pages/ForgotPassword' */

import Perfil from './pages/Perfil'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
   
  }

  render () {
    
    return (
      <Router>
        <div className="App">
         
          <Perfil/>
          {/* <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signin">
            <Signin/>
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPassword/>
          </Route> */}
         {/*  <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Notes">
              <Note isUserLogedIn={isUserLogedIn}/>
            </Route>
            <Route exact path="/Converter">
              <Converter />
            </Route>
            <Route exact path="/CreditCard">
              <CreditCard />
            </Route>
            <Route exact path="/Hooks">
              <Hooks />
            </Route>
          </Switch> */}
          
        </div>
      </Router>      
    )
  }
}
