import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


import Index from './pages/Index'
import Login from './pages/Login'
import Signin from './pages/Signin'
import Perfil from './pages/Perfil'
import ForgotPassword from './pages/ForgotPassword'
import Footer from './components/Footer'
import Event from './pages/Event'
import EventDetail from './pages/EventDetail'
import Expenses from './pages/Expenses'


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
        
           <Route exact path="/">
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
          </Route>
          <Route exact path="/event">
            <Event/>
          </Route>
          <Route exact path="/event-detail">
            <EventDetail/>
          </Route>
          <Route exact path="/profile">
            <Perfil/>
          </Route>
          <Route exact path="/expenses">
            <Expenses/>
          </Route>
          <Footer />

          
        </div>
      </Router>      
    )
  }
}
