import React, { Component } from "react";
// Import components
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'
import Image  from './../../components/ImgContainer'
import novios from './../../img/novios6.svg'

<<<<<<< HEAD
import Api from '../../lib/api'

// Import CSS
=======
>>>>>>> d6db0fd9e3539ba3a762ddd9c79bc2bb867a573f
import './Perfil.css'
import Api from '../../lib/api'

export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
        _id:'',
        email:'',
        name:'',
        last_name:''
    };
  }
  
  handleInput({ target:{ name, value }}){
    this.setState({
      [name]: value
    })
  }

  componentDidMount(){
    // get token
    const token = window.localStorage.getItem('tokenapp')
    if(token === false) this.props.history.push(`/login`)

    // buscar  user
    async function getSession (token){
      const sessionObj = await Api.getUserSession(token)
      return sessionObj
    }
    const result = getSession(token)
    
    result.then((result)=>{
      const idUser = result.data.session.user._id
      const name = result.data.session.user.name
      const email = result.data.session.user.email
      const last_name = result.data.session.user.lastName
      this.state._id = idUser;
      this.state.name =  name;
      this.state.email = email;
      this.state.lastName = last_name;
    })
  }

  async onSubmit (event) { 
    event.preventDefault()
    const token = window.localStorage.getItem('tokenapp')
    if(token === false) this.props.history.push(`/login`)
    const { name, lastName} = this.state
    if (name === '' || lastName === ''){
      this.setState({
        response: 'Favor de llenar todos los datos',
        statusresponse: 'error'
      })
=======
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
    console.log(token)
    if(token == null){
      this.props.history.push(`/login`)
      return
    }

    // buscar session
    async function getSession (token){
      console.log(token)
      const sessionObj = await Api.getUserSession(token)
      return sessionObj
    }
    const payload = getSession(token)
    
    //extract user info
    payload.then((result)=>{
      const idUser = result.data.session.user._id
      console.log(idUser)
      console.log(result.data.session.user)
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
    console.log(dataUser)

    if(name === '' || lastName === '' ) {
      // empty vals
      console.log('Por favor, llena los datos obligatorios')
      this.setState({
        response: 'Por favor, llena los datos obligatorios',
        statusresponse: 'error'
      });
      // en 4 segundos quitamos el mensaje 
>>>>>>> d6db0fd9e3539ba3a762ddd9c79bc2bb867a573f
      setTimeout(() => {
        this.setState({
          response: '',
          statusresponse: ''
        });
      }, 4000)
<<<<<<< HEAD
    } else {
      const payload = await Api.updateAUser(token, this.state._id,{name, lastName})
      console.log(payload)
      if(payload.success === true){
        this.setState({
          response: 'Datos actualizados correctamente',
          statusresponse: 'success'
        });
        setTimeout(() => {
          window.location.href = '/profile'
        }, 3000)
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
=======

    }else{
      // si todo ok
      const token = window.localStorage.getItem('tokenapp')
      async function getSession (token){
        console.log(token)

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
>>>>>>> d6db0fd9e3539ba3a762ddd9c79bc2bb867a573f
    }
  }

  render() {
<<<<<<< HEAD
      const {name,email,lastName}=this.state
=======
>>>>>>> d6db0fd9e3539ba3a762ddd9c79bc2bb867a573f
    return (
    <div>
        <div className="ctn-profile pt-4 mb-5">
        <Navbar/>
<<<<<<< HEAD
        <div className="ctn-profile">
            <div className="container-title">
                <h2 className="title__section">Perfil</h2>
            </div>
            <div className="container-body">
            <div className="container-form-profile">

                <form 
                  className='event-form d-flex flex-column event__info card__app p-5 rounded mt-5'
                  onSubmit={this.onSubmit.bind(this)} 
                  action=''>
                    <div className="row-input">
                        <div className='col-12 col-md-6'>
                            <label>Correo electrónico</label>
                        </div>
                        <div className='col-12 col-md-6'>
                            <input placeholder="mail@mail.com" value={email}  disabled/>
                        </div>
                    </div>
                    <div className="row-input">
                        <div className='col-12 col-md-6'>
                            <label>Nombre(s)</label>
                        </div>
                        <div className='col-12 col-md-6'>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                value={name}
                                onChange={this.handleInput.bind(this)} 
                            />
=======
            <div className="wrap__inner">
            <h2 className="title__section">Perfil</h2>

            <div className="container-body row">
                <div className="container-form-profile col-12 col-md-6">
                    <form 
                      action="" 
                      className="d-flex flex-column card__app p-5 rounded mt-5"
                      onSubmit={this.onSubmit.bind(this)} 
                    >

                        <div className="row-input flex-column mb-5">
                            <div className='col-12'>
                                <label>Correo electrónico</label>
                            </div>
                            <div className='col-12'>
                              <strong>{this.state.email}</strong>
                                <input 
                                    placeholder="mail@mail.com" 
                                    disabled 
                                    type="hidden"
                                    value={this.state.email}
                                    onChange={this.handleInput.bind(this)}
                                />
                            </div>
>>>>>>> d6db0fd9e3539ba3a762ddd9c79bc2bb867a573f
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
<<<<<<< HEAD
                        <div className='col-12 col-md-6'>
                            <input 
                                type="text" 
                                id="lastName" 
                                name="lastName"
                                value={lastName}
                                onChange={this.handleInput.bind(this)} 
                            />
                        </div>
                    </div>
                    <div className="row row-inputform mt-4">
                      <div className='col-12'>
                      <p className={`response-message ${this.state.statusresponse}`}>{this.state.response}</p>
                        <button type="submit" className="btn__app btn__dark large">Actualizar perfil</button>
                      </div>
                    </div>
                </form>
                    
            </div>
            <div className="container-image">
                <Image imageUrl={novios} />
            </div>
=======
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
>>>>>>> d6db0fd9e3539ba3a762ddd9c79bc2bb867a573f
            </div>
            </div>
      <Footer/>
    </div>
    );
  }
}