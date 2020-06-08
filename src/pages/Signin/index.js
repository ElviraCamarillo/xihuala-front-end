import React, { Component } from 'react'

//Import icons
import novios from '../../img/novios3.svg'

// Import components
import ImgContainer from '../../components/ImgContainer'
import HeaderPreLogin from '../../components/HeaderPreLogin'
import PrimaryButton from '../../components/PrimaryButton'
import Footer from '../../components/Footer'
import Api from '../../lib/api'

// Import CSS
import './Signin.css'

export default class Signin extends Component {
  constructor(props){
    super(props)
      this.state = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        ispassok: true,
        response:''
      }
  }
  handleInput({ target:{ name, value }}){
    this.setState({
      [name]: value
    })
  }
  async onSubmit (event) {
    event.preventDefault()
    const name = this.state.name
    const lastName = this.state.lastname
    const email = this.state.email
    const password = this.state.password
    const verifypassword = this.state.verifyPass
    if(verifypassword !== password) {
      // si pass no coinciden
      console.log('password no coinciden')
      this.setState({
        ispassok: false,
        response: 'Las contraseñas no coinciden',
      });
      // en 4 segundos quitamos el mensaje 
      setTimeout(() => {
        this.setState({
          ispassok: true,
          response: '',
        });
      }, 4000)

    }else{
      // si todo ok
      const payload = await Api.newUser({name, lastName, email, password})
      console.log(payload)
    }

  }
  render() {
    return (
      <div>
          <HeaderPreLogin />
          <section className='row'>
            <div className='col-12 col-md-6'>
              <h2>¡Comienza ya!</h2>
              <form 
                className='signin-form d-flex flex-column' 
                onSubmit={this.onSubmit.bind(this)} 
                action=''>
                <label className='text-dark' for="name-signin">Nombre:</label>
                <input 
                  type="text" 
                  id="name-signin" 
                  name="name"
                  onChange={this.handleInput.bind(this)}
                  autoComplete="off" 
                />
                <label className='text-dark' for="lastname-signin">Apellidos:</label>
                <input 
                  type="text" 
                  id="lastname-signin" 
                  name="lastname"
                  onChange={this.handleInput.bind(this)}
                  autoComplete="off" 
                />

                <label className='text-dark' for="email-signin">Correo electrónico:</label>
                <input 
                  type="email" 
                  id="email-signin" 
                  name="email"
                  onChange={this.handleInput.bind(this)}
                  autoComplete="off"
                />
                <label className='text-dark' for="password-signin">Contraseña:</label>
                <input 
                  type="password" 
                  id="password-signin" 
                  name="password"
                  onChange={this.handleInput.bind(this)}
                  autoComplete="off" 
                />
                <label className='text-dark' for="verifyPass-signin">Verifica tu contraseña:</label>
                <input 
                  type="password" 
                  id="verifyPass-signin" 
                  name="verifyPass"
                  onChange={this.handleInput.bind(this)}
                  autoComplete="off"
                />
                <p className="response">{this.state.response}</p>
                <div className='d-flex flex-column justify-content-center align-items-start'>
                  <PrimaryButton name={"REGÍSTRATE"}/>
                </div>                                         
              </form>
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
