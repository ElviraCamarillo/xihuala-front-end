import React, { Component } from "react";
// Import components
import Navbar from './../../components/Navbar'
import Footer from './../../components/Footer'
import Image  from './../../components/ImgContainer'
import novios from './../../img/novios6.svg'

import Api from '../../lib/api'

// Import CSS
import './Perfil.css'

export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      setTimeout(() => {
        this.setState({
          response: '',
          statusresponse: ''
        });
      }, 4000)
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
    }
  }

  render() {
      const {name,email,lastName}=this.state
    return (
    <div>
        <Navbar/>
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
                        </div>
                    </div>
                    <div className="row-input">
                        <div className='col-12 col-md-6'>
                            <label>Apellidos</label>
                        </div>
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
            </div>
            </div>
       <Footer/>
    </div>
    );
  }
}