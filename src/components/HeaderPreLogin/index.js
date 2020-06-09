import React from 'react'
import {
  Link
} from "react-router-dom";
import logo from '../../img/logo-color.svg'


import './HeaderPreLogin.css'

export default function HeaderPreLogin() {
  return (
    <header className='index-header'>
      <div className="wrap__inner">
        <div className="row">
          <div className='col-4 col-md-6'>
            <img className='logo-index' src={logo} alt="" />
          </div>
          <div className='col-8 col-md-6 text-right'>
            <Link to='/signup' className="link__menu">Regístrate</Link>
            <Link to='/login' className="link__menu">Iniciar sesión</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
