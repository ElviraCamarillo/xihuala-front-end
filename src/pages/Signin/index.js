import React, { Component } from 'react'


//Import icons
import novios from '../../img/novios3.svg'

// Import components
import ImgContainer from '../../components/ImgContainer'
import HeaderPreLogin from '../../components/HeaderPreLogin'
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
      response:'',
      statusresponse: ''
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
    console.log(this.props)
    if(verifypassword !== password) {
      // si pass no coinciden
      console.log('password no coinciden')
      this.setState({
        ispassok: false,
        response: 'Las contraseñas no coinciden',
        statusresponse: 'error'
      });
      // en 4 segundos quitamos el mensaje 
      setTimeout(() => {
        this.setState({
          ispassok: true,
          response: '',
          statusresponse: ''
        });
      }, 4000)

    }else{
      // si todo ok
      const payload = await Api.newUser({name, lastName, email, password})
      console.log(payload)
      if(payload.success === true){
        this.setState({
          response: 'Usuario registrado correctamente',
          statusresponse: 'success'
        });
        setTimeout(() => {
          this.props.history.push(`/login`)
        }, 5000)
      }else{
        this.setState({
          response: payload.error,
          statusresponse: 'error'
        });
        setTimeout(() => {
          this.setState({
            response: '',
            statusresponse: ''
          });
        }, 4000)
      }
      

    }

  }

  handleEmail = e => {
    const { value } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) {
      this.setState({
        [e.target.name]: value
      })
      e.target.classList.remove('is-invalid')
    }else{
      e.target.classList.add('is-invalid')
    }
  }

  render() {
    return (
      <div className="ctn__signup">
          <HeaderPreLogin />
          <div className="wrap__inner">
            <section className='row'>
              <div className='col-12 col-md-6'>
                <h2 className="title__section">¡Comienza ya!</h2>
                <form 
                  className='signin-form d-flex flex-column card__app p-5 rounded' 
                  onSubmit={this.onSubmit.bind(this)} 
                  action=''>
                  <label className='' for="name-signin">Nombre:</label>
                  <input 
                    type="text" 
                    id="name-signin" 
                    name="name"
                    onChange={this.handleInput.bind(this)}
                    autoComplete="off" 
                  />
                  <label className='' for="lastname-signin">Apellidos:</label>
                  <input 
                    type="text" 
                    id="lastname-signin" 
                    name="lastname"
                    onChange={this.handleInput.bind(this)}
                    autoComplete="off" 
                  />

                  <label className='' for="email-signin">Correo electrónico:</label>
                  <input 
                    type="email" 
                    id="email-signin" 
                    name="email"
                    onChange={this.handleEmail.bind(this)}
                    autoComplete="off"
                  />
                  <label className='' for="password-signin">Contraseña:</label>
                  <input 
                    type="password" 
                    id="password-signin" 
                    name="password"
                    onChange={this.handleInput.bind(this)}
                    autoComplete="off" 
                  />
                  <label className='' for="verifyPass-signin">Verifica tu contraseña:</label>
                  <input 
                    type="password" 
                    id="verifyPass-signin" 
                    name="verifyPass"
                    onChange={this.handleInput.bind(this)}
                    autoComplete="off"
                  />
                  <p className={`response-message ${this.state.statusresponse}`}>{this.state.response}</p>
                  
                  <div className='d-flex flex-column justify-content-center align-items-start mt-4'>
                    <button className="btn__app btn__dark large" type="submit">REGÍSTRATE</button>
                  </div>                                         
                </form>
              </div>
              <div className='image-container col-12 col-md-6 d-flex justify-content-center'>
                <ImgContainer imageUrl={novios} />
              </div>          
            </section>
          </div>

        <Footer/>
      </div>
    )
  }
}
