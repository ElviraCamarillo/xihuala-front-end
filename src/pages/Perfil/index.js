import React, { Component } from "react";
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'
import Image  from './../../components/ImgContainer'
import novios from './../../img/novios6.svg'

import './Perfil.css'

import Api from '../../lib/api'

export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      email: ''
    }
  }
  handleInput({ target: { name, value } }) {
    this.setState({
        [name]: value
    })        
  }
  componentDidMount(){
    // get token
    const token = window.localStorage.getItem('tokenapp')
    /*console.log(token)*/
    if(token == null){
      this.props.history.push(`/login`)
      return
    }
    // buscar session
    async function getSession (token){
      /*console.log(token)*/
      const sessionObj = await Api.getUserSession(token)
      return sessionObj
    }
    const payload = getSession(token)
    //extract user info
    payload.then((result)=>{
      const idUser = result.data.session.user._id
      /*console.log(idUser)
      console.log(result.data.session.user)*/
      this.setState({
        email: result.data.session.user.email,
        lastName: result.data.session.user.lastName,
        name: result.data.session.user.name,
      });
    })
  }
  async onSubmit (event) {
    event.preventDefault()
    const name = this.state.name
    const lastName = this.state.lastName
    const dataUser = {
      name,
      lastName
    }
    /*console.log(dataUser)*/
    if(name === '' || lastName === '' ) {
      // empty vals
      /*console.log('Por favor, llena los datos obligatorios')*/
      this.setState({
        response: 'Por favor, llena los datos obligatorios',
        statusresponse: 'error'
      });
      // en 4 segundos quitamos el mensaje 
      setTimeout(() => {
        this.setState({
          response: '',
          statusresponse: ''
        });
      }, 4000)

    } else {

      // si todo ok
      const token = window.localStorage.getItem('tokenapp')
      async function getSession (token){
        /*console.log(token)*/
        const sessionObj = await Api.getUserSession(token)
        return sessionObj
      }
      async function updateUser (token, idUser, dataUser){
        const userObj = await Api.updateProfile(token, idUser, dataUser)
        return userObj
      }
      const payload = getSession(token)
      payload.then((result)=>{
        const idUser = result.data.session.user._id
        const user = updateUser(token, idUser, {name,lastName} )
        user.then((resultUser)=>{
          this.setState({
            response: 'Usuario actualizado correctamente',
            statusresponse: 'success'
          });
          // en 4 segundos quitamos el mensaje 
          setTimeout(() => {
            this.setState({
              response: '',
              statusresponse: ''
            });
          }, 4000)
        })
      })
    }
  }
  render() {
    return (
    <div>
        <div className="ctn-profile pt-4 mb-5">
          <Navbar/>
            <div className="wrap__inner">
            <h2 className="title__section">Perfil</h2>
            <div className="container-body row">
                <div className="container-form-profile col-12 col-md-6">
                    <form 
                      action="" 
                      className="d-flex flex-column card__app p-5 rounded mt-5"
                      onSubmit={this.onSubmit.bind(this)} 
                    >
                        <div className="row-input flex-column">
                            <div className='col-12'>
                                <label>Correo electrónico</label>
                            </div>
                            <div className='col-12'>
                                <input 
                                    placeholder="mail@mail.com" 
                                    disabled 
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleInput.bind(this)}
                                />
                            </div>
                        </div>
                        <div className="row-input flex-column">
                            <div className='col-12'>
                                <label>Nombre(s)</label>
                            </div>
                            <div className='col-12'>
                                <input 
                                  placeholder="first_name" 
                                  value={this.state.name} 
                                  name="name"
                                  onChange={this.handleInput.bind(this)}
                                />
                            </div>
                        </div>
                        <div className="row-input flex-column">
                            <div className='col-12'>
                                <label>Apellidos</label>
                            </div>
                            <div className='col-12'>
                                <input 
                                  placeholder="last_name" 
                                  value={this.state.lastName}
                                  name="lastName"
                                  onChange={this.handleInput.bind(this)}
                                />
                            </div>
                        </div>
                        <p className={`response-message ${this.state.statusresponse}`}>{this.state.response}</p>
                        <div className="row">
                            <div className='col-12 text-right'>
                                <button className="btn__app btn__dark large" type="submit">Actualizar perfil</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="image-container col-12 col-md-6 d-flex justify-content-center">
                    <Image imageUrl={novios} />
                </div>
                </div>
            </div>
          <Footer/>
        </div>
    </div>
    );
  }
}