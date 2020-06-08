import React, { Component } from 'react'

// Import icons
import novios from '../../img/novios4.svg'

// Import components
import ImgContainer from '../../components/ImgContainer'
import HeaderPreLogin from '../../components/HeaderPreLogin'
import PrimaryButton from '../../components/PrimaryButton'
import Footer from '../../components/Footer'

// Import CSS
import './ForgotPassword.css'

export default class ForgotPassword extends Component {
  render() {
    return (
      <div>
        <HeaderPreLogin />

      <section className='row d-flex flex-md-row-reverse'>
        <div className='col-12 col-md-6'>
          <h2>Recupera tu contraseña</h2>
          <form className='login-form d-flex flex-column'>
            <label className='text-dark' for="email-login">Correo electrónico:</label>
            <input type="text" id="email-login" name="email-login" />
          </form>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <PrimaryButton name={"RECUPERA TU CONTRASEÑA"}/>
        </div>                                        
        </div>
        <div className='image-container col-12 col-md-6 d-flex justify-content-center'>
          <ImgContainer imageUrl={novios} />
        </div>          
      </section>
      <Footer/>
      </div>
    )
  }
}
