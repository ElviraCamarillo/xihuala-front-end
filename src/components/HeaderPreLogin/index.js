import React from 'react'

import logo from '../../img/logo-color.svg'


import './HeaderPreLogin.css'

export default function HeaderPreLogin() {
  return (
    <header className='index-header row sticky-top'>
      <div className='index-logo col-12 col-md-6'>
       
        <img className='logo-index' src={logo} alt=""></img>
      </div>
      <div className='index-btn col-12 col-md-6'>
        <a className='register text-dark' href='/signin'>Regístrate</a>
        <a className='login' href='/login'>Iniciar sesión</a>
      </div>
    </header>
  )
}
