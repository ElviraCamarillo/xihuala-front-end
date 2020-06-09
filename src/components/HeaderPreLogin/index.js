import React from 'react'
import {
  Link
} from "react-router-dom";
import logo from '../../img/logo-color.svg'


import './HeaderPreLogin.css'

export default function HeaderPreLogin() {
  return (
    <header className='index-header row sticky-top'>
      <div className='index-logo col-12 col-md-6'>
       
        <img className='logo-index' src={logo} alt=""></img>
      </div>
      <div className='index-btn col-12 col-md-6'>
        <Link to='/signup' className="register text-dark">Regístrate</Link>
        <Link to='/login' className="login ">Iniciar sesión</Link>
        
      </div>
    </header>
  )
}
