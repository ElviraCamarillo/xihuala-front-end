import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import icons
import novios from '../../img/novios7.svg'
import titleIcon from '../../img/event-color-icon.svg'
import coupleIcon from '../../img/pople-icon.svg'
import locationIcon from '../../img/location-icon.svg'
import dateIcon from '../../img/date-icon.svg'
import timeIcon from '../../img/hour-icon.svg'
import phoneIcon from '../../img/phone-icon.svg'

// Import components
import ImgContainer from '../../components/ImgContainer'
import PrimaryButton from '../../components/PrimaryButton'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Api from '../../lib/api'

// Import CSS
import './Event.css'

export default class Event extends Component {
  constructor(props){
    super(props)
    this.state = {
      nameEvent: '',
      location: '',
      eventDate: '',
      eventTime: '',
      contactPhone: '',
      response:'',
      statusresponse: '',
      idUser: '',
      buget: ''
    }
  }

  static contextTypes = {
    router: PropTypes.object
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

    // buscar los eventos con este id user
    async function getSession (token){
      console.log(token)
      const sessionObj = await Api.getUserSession(token)
      return sessionObj
    }
    const result = getSession(token)
    
    result.then((result)=>{
      const idUser = result.data.session.user._id
      console.log(`aqui está el id ${idUser}`)
      this.state.idUser = idUser

    })
  }

  async onSubmit (event) {
    const token = window.localStorage.getItem('tokenapp')
    if(token === false) this.props.history.push(`/login`)
    
    event.preventDefault()
    const { nameEvent, location, eventDate, eventTime, contactPhone, idUser, buget} = this.state
    console.log(this.props)
    if (nameEvent === '' || location === '' || eventDate === '' || eventTime === '' || contactPhone === '' || buget === ''){
      console.log('Datos incompletos')
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
      const payload = await Api.newEvent(token, {nameEvent, location, eventDate, eventTime, contactPhone, idUser, buget})
      console.log(payload)
      if(payload.success === true){
        this.setState({
          response: 'Evento registrado correctamente',
          statusresponse: 'success'
        });
        setTimeout(() => {
          window.location.href = '/home'
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
    return (
      <div className="wrap__home">
          <Navbar/>
          <div className="wrap__inner pt-5">
            <section className='row'>
              <div className='col-12 col-md-6'>
                <div className='d-flex pb-5'>
                  <img className='pr-3' src={titleIcon} alt='' />
                  <h1 className='title__section'>Evento</h1>
                </div>              
                <form 
                  className='event-form d-flex flex-column'
                  onSubmit={this.onSubmit.bind(this)} 
                  action=''>
                  <div className='d-md-flex pb-3'>
                    <div className='icon-container'>
                      <img src={coupleIcon}  alt='' />
                    </div>                  
                    <label className='text-dark' for="nameEvent">Novios:</label>
                    <input 
                      type="text" 
                      id="nameEvent" 
                      name="nameEvent"
                      onChange={this.handleInput.bind(this)} />    
                      
                  </div>
                  <div className='d-md-flex pb-3'>
                    <div className='icon-container'>
                      <img src={locationIcon}  alt='' />
                    </div>                  
                    <label className='text-dark' for="location">Ubicación:</label>
                    <input
                      type="text" 
                      id="location" 
                      name="location"
                      onChange={this.handleInput.bind(this)} />
                  </div>                
                  <div className='d-md-flex pb-3'>
                    <div className='icon-container'>
                      <img src={dateIcon}  alt='' />
                    </div>                  
                    <label className='text-dark' for="eventDate">Fecha del evento:</label>
                    <input 
                      type="date" 
                      id="eventDate" 
                      name="eventDate"
                      onChange={this.handleInput.bind(this)} />
                  </div>
                  <div className='d-md-flex pb-3'>
                    <div className='icon-container'>
                      <img src={timeIcon}  alt='' />
                    </div>                  
                    <label className='text-dark' for="eventTime">Hora del evento:</label>
                    <input 
                      type="text" 
                      id="eventTime" 
                      name="eventTime"
                      onChange={this.handleInput.bind(this)} />
                  </div>
                  <div className='d-md-flex pb-3'>
                    <div className='icon-container'>
                      <img src={phoneIcon}  alt='' />
                    </div>                  
                    <label className='text-dark' for="contactPhone">Tel. de contacto:</label>
                    <input 
                      type="text" 
                      id="contactPhone" 
                      name="contactPhone"
                      onChange={this.handleInput.bind(this)} />                   
                  </div>
                  <div className='d-md-flex pb-3'>
                    <div className='icon-container'>
                      <img src={phoneIcon}  alt='' />
                    </div>                  
                    <label className='text-dark' for="buget">Presupuesto:</label>
                    <input 
                      type="text" 
                      id="buget" 
                      name="buget"
                      onChange={this.handleInput.bind(this)} />                   
                  </div>
                  <p className={`response-message ${this.state.statusresponse}`}>{this.state.response}</p>
                  <div className='button d-flex flex-column justify-content-center align-items-start'>
                    <button className="btn__app btn__dark large" type="submit">Guardar Evento</button>
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
