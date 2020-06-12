import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

import Index from './pages/Index'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Signin from './pages/Signin'
import Perfil from './pages/Perfil'
import ForgotPassword from './pages/ForgotPassword'
import Event from './pages/Event'
import EventDetail from './pages/EventDetail'
import Home from './pages/Home'
import Guests from './pages/Guests'
import Expenses from './pages/Expenses'
import ConfirmGuest from './pages/ConfirmGuest'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render () {    
    return (
      <BrowserRouter>
        <div className="App">  
        <Switch>     
          <Route exact path="/">
            <Index />
          </Route>
          <Route 
            exact 
            path="/home" 
            component={Home} 
          />
          <Route 
            exact 
            path="/login" 
            component={Login}
          />
          <Route 
            exact 
            path="/logout" 
            component={Logout}
          />
          <Route 
            exact 
            path="/signup" 
            component={Signin} 
          />
          <Route 
          exact path="/forgot-password">
            <ForgotPassword/>
          </Route>
          
          <Route 
            exact 
            path="/event" 
            component={Event} 
          />

          <Route 
            exact 
            path="/events/:id" 
            component={EventDetail} 
            
          />

          <Route 
            exact 
            path="/profile"
            component={Perfil}
          />

          <Route 
            exact 
            path="/events/:id/guests"
            component={Guests}
          />
          <Route 
            exact
            path="/events/:id/expenses"
            component={Expenses}
          />
          <Route 
            exact 
            path="/event/:id/confirm"
            component={ConfirmGuest}
          />

        </Switch> 

        </div>
      </BrowserRouter>     
    )
  }
}
