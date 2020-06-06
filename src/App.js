import React, { Component } from 'react';

import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css'
import Navbar from './components/Navbar'

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
          <Navbar/>
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
