import React, { Component } from 'react'

import novios from '../../img/novios2.svg'

import ImgContainer from '../../components/ImgContainer'
import HeaderPreLogin from '../../components/HeaderPreLogin'
import PrimaryButton from '../../components/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton'

import './Login.css'

export default class Login extends Component {
  render() {
    return (
      <div>
        <body>

          <HeaderPreLogin />

          <section className='row d-flex flex-md-row-reverse'>
            <div className='col-12 col-md-6'>
              <h2>Inicia sesión</h2>
              <form className='login-form d-flex flex-column'>
                <label className='text-dark' for="email-login">Correo electrónico:</label>
                <input type="text" id="email-login" name="email-login" />
                <label className='text-dark' for="password-login">Contraseña:</label>
                <input type="text" id="password-login" name="password-login" />
              </form>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <PrimaryButton name={"INICIAR SESIÓN"}/>
                <br/>
                <a className='forgot-pass' href='/forgot-password'>¿Olvidaste tu contraseña?</a>
              </div>                            
              <br/>
              <br/>
              <br/>              
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <p className='noAccount'>¿Aún no tienes cuenta?</p>
                <SecondaryButton className='sec-btn' name={"REGÍSTRATE"}/>
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
