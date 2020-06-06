import React, { Component } from 'react'

import novios from '../../img/novios3.svg'

import ImgContainer from '../../components/ImgContainer'
import HeaderPreLogin from '../../components/HeaderPreLogin'
import PrimaryButton from '../../components/PrimaryButton'

import './Signin.css'

export default class Signin extends Component {
  render() {
    return (
      <div>
        <body>

          <HeaderPreLogin />

          <section className='row'>
            <div className='col-12 col-md-6'>
              <h2>¡Comienza ya!</h2>
              <form className='signin-form d-flex flex-column'>
                <label className='text-dark' for="name-signin">Nombre:</label>
                <input type="text" id="name-signin" name="name-signin" />
                <label className='text-dark' for="lastname-signin">Apellidos:</label>
                <input type="text" id="lastname-signin" name="lastname-signin" />

                <label className='text-dark' for="email-signin">Correo electrónico:</label>
                <input type="text" id="email-signin" name="email-signin" />
                <label className='text-dark' for="password-signin">Contraseña:</label>
                <input type="text" id="password-signin" name="password-signin" />
                <label className='text-dark' for="verifyPass-signin">Verifica tu contraseña:</label>
                <input type="text" id="verifyPass-signin" name="verifyPass-signin" />
              </form>
              <div className='d-flex flex-column justify-content-center align-items-start'>
                <PrimaryButton name={"REGÍSTRATE"}/>
              </div>                                         
            </div>
            <div className='image-container col-12 col-md-6 d-flex justify-content-center'>
              <ImgContainer imageUrl={novios} />
            </div>          
          </section>

        </body>
      </div>
    )
  }
}
