import React from 'react';
import logo from './logo.svg';
import './App.css';

import novios from './img/novios1.svg'

import PrimaryButton from './components/PrimaryButton'
import SecondaryButton from './components/SecondaryButton'
import ImageContainer from './components/ImgContainer'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      <PrimaryButton name={"INICIAR SESIÓN"} />
      <SecondaryButton name={"CERRAR SESIÓN"} />
      <ImageContainer imageUrl={novios} />
      <Footer />
      
      
    </div>
  );
}

export default App;
