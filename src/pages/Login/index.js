import React, { Component } from 'react'

import novios from '../../img/novios2.svg'

import ImgContainer from '../../components/ImgContainer'
import HeaderPreLogin from '../../components/HeaderPreLogin'
import PrimaryButton from '../../components/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton'
import Footer from '../../components/Footer'
import Api from '../../lib/api'

import './Login.css'

export default class Login extends Component {
  constructor(props){
    super (props)
    this.state = {
      email: '',
      password: '',
    }
  }
  handleInput({ target: { name, value } }) {
    this.setState({
        [name]: value
    })        
  }
  async onSubmit(event){
    event.preventDefault()
    const email = this.state.email
    const password = this.state.password
    const payload = await Api.login(email, password)
    localStorage.setItem('tokenapp', payload.data.token);
  }
  render(){
    return (
      <div>
        <HeaderPreLogin />
        <section className='row d-flex flex-md-row-reverse'>
          <div className='col-12 col-md-6'>
            <h2>Inicia sesión</h2>
            <form className='login-form d-flex flex-column' onSubmit={this.onSubmit.bind(this)} action="">
              <label className='text-dark' for="email-login">Correo electrónico:</label>
              <input 
                type="text" 
                id="email-login" 
                name="email"
                onChange={ this.handleInput.bind(this) }
              />
              <label className='text-dark' for="password-login">Contraseña:</label>
              <input 
                type="password" 
                id="password-login" 
                name="password" 
                onChange={ this.handleInput.bind(this) }
              />
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <PrimaryButton name={"INICIAR SESIÓN"} type='submit'/>
                <br/>
                <a className='forgot-pass' href='/forgot-password'>¿Olvidaste tu contraseña?</a>
              </div> 
            </form>                           
            <br/>
            <br/>
            <br/>              
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <p className='noAccount'>¿Aún no tienes cuenta?</p>
              <SecondaryButton className='sec-btn' name={"REGÍSTRATE"} type='submit'/>
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
