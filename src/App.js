import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Footer from './components/Footer'
import Index from './pages/Index'
import Login from './pages/Login'
import Signin from './pages/Signin'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <div className="App">
      <Router>
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
      </Router>   
      <Footer />      
    </div>
  );
}

export default App;
