import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import icons
import novios from '../../img/novios7.svg'


// Import components
import ImgContainer from '../../components/ImgContainer'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Api from '../../lib/api'

// Import CSS
import './Event.css'

export default class Event extends Component {
<<<<<<< HEAD
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
      idUser: ''
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

=======

  constructor(props){
    super(props)
    this.state = {
      location: '',
      nameEvent: '',
      eventDate: '',
      eventTime: '',
      contactPhone: '',
      guests: [],
      buget: 0,
      expenses:[],
      idUser: '',
      response: '',
      statusresponse:''
    }
  }

>>>>>>> d6db0fd9e3539ba3a762ddd9c79bc2bb867a573f
  handleInput({ target:{ name, value }}){
    this.setState({
      [name]: value
    })
  }
<<<<<<< HEAD

  componentDidMount(){
    // get token
    const token = window.localStorage.getItem('tokenapp')
    if(token === false) this.props.history.push(`/login`)
=======
  componentDidMount(){
    // get token
    const token = window.localStorage.getItem('tokenapp')
    console.log(token)
    if(token == null){
      this.props.history.push(`/login`)
      return
    }
>>>>>>> d6db0fd9e3539ba3a762ddd9c79bc2bb867a573f

    // buscar los eventos con este id user
    async function getSession (token){
      console.log(token)
      const sessionObj = await Api.getUserSession(token)
      return sessionObj
    }
<<<<<<< HEAD
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
    const { nameEvent, location, eventDate, eventTime, contactPhone, idUser} = this.state
    console.log(this.props)
    if (nameEvent === '' || location === '' || eventDate === '' || eventTime === '' || contactPhone === ''){
      console.log('Datos incompletos')
      this.setState({
        response: 'Favor de llenar todos los datos',
        statusresponse: 'error'
      })
=======

    const payload = getSession(token)

    payload.then((result)=>{
      const idUSer = result.data.session.user._id
      this.setState({
        idUser: idUSer
      });
    })

  }

  async onSubmit (event) {
    event.preventDefault()

    const location = this.state.location
    const nameEvent = this.state.nameEvent
    const eventDate = this.state.eventDate
    const eventTime = this.state.eventTime
    const contactPhone = this.state.contactPhone
    const guests = this.state.guests
    const buget = this.state.buget
    const expenses = this.state.expenses
    const idUser = this.state.idUser


    console.log(this.props)
    if(this.state.nameEvent === '') {
      // si no hay nombre del evento
      this.setState({
        response: 'Faltan datos obligatorios',
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
      const payload = await Api.newEvent(token, {nameEvent, location, eventDate, eventTime, contactPhone, idUser})
      console.log(payload)
      if(payload.success === true){
=======

    }else{
      // si todo ok
      const payload = await Api.newEvent({
        location,
        nameEvent,
        eventDate,
        eventTime,
        contactPhone,
        guests,
        buget,
        expenses,
        idUser
      })

      if(payload.success === true){
        
>>>>>>> d6db0fd9e3539ba3a762ddd9c79bc2bb867a573f
        this.setState({
          response: 'Evento registrado correctamente',
          statusresponse: 'success'
        });
<<<<<<< HEAD
        setTimeout(() => {
          window.location.href = '/home'
        }, 3000)
      }else{
        this.setState({
          response: payload.error,
          statusresponse: 'error'
        });
=======
        
        setTimeout(() => {
          this.setState({
            location: '',
            nameEvent: '',
            eventDate: '',
            eventTime: '',
            contactPhone: '',
            guests: [],
            buget: 0,
            expenses:[],
            idUser: '',
            response: '',
            statusresponse:''
          });
        }, 4000)
        
      }else{

        this.setState({
          response: payload.error,
          statusresponse: 'Error'
        });

>>>>>>> d6db0fd9e3539ba3a762ddd9c79bc2bb867a573f
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
<<<<<<< HEAD
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
=======
          <div className="ctn--newEvent">
            <div className="wrap__inner pb-5">
              <section className='row'>
                <div className='col-12 col-md-6'>
                  <div className='d-flex pb-5'>
                    <h2 className="title__section">Nuevo Evento</h2>
                  </div>              
                  <form 
                    className='event-form d-flex flex-column card__app px-3 py-3 px-md-5 rounded mt-1'
                    onSubmit={this.onSubmit.bind(this)}
                  >
                    <div className=' pb-3'>
                  
                      <label className='text-dark' for="couple-names">Novios:</label>
                      <input 
                        type="text" 
                        id="couple-names" 
                        name="nameEvent"
                        onChange={this.handleInput.bind(this)}
                        value={this.state.nameEvent}
                        autoComplete="off" 
                      />
                    </div>
                    <div className=' pb-3'>                
                      <label className='text-dark' for="location">Ubicación:</label>
                      <input 
                        type="text" 
                        id="location" 
                        name="location"
                        onChange={this.handleInput.bind(this)}
                        autoComplete="off" 
                        value={this.state.location}
                      />
                    </div>                
                    <div className=' pb-3'>               
                      <label className='text-dark' for="event-date">Fecha del evento:</label>
                      <input 
                        type="date" 
                        id="event-date" 
                        name="eventDate"
                        onChange={this.handleInput.bind(this)}
                        value={this.state.eventDate}
                        autoComplete="off" 
                      />
                    </div>
                    <div className=' pb-3'>                
                      <label className='text-dark' for="event-time">Hora del evento:</label>
                      <input 
                        type="text" 
                        id="event-time" 
                        name="eventTime"
                        placeholder="14:00"
                        onChange={this.handleInput.bind(this)}
                        value={this.state.eventTime}
                        autoComplete="off" 
                      />
                    </div>
                    <div className=' pb-3'>                 
                      <label className='text-dark' for="contact-phone">Tel. de contacto:</label>
                      <input 
                        type="text" 
                        id="contact-phone" 
                        name="contactPhone"
                        onChange={this.handleInput.bind(this)}
                        value={this.state.contactPhone}
                        autoComplete="off"
                        maxLength="10" 
                      />
                    </div>     
                    <p className={`response-message ${this.state.statusresponse}`}>{this.state.response}</p>           
                    <div className='button d-flex flex-column justify-content-center align-items-start'>
                      <button type="submit" className="btn__app btn__dark large">Guardar evento</button>
                    </div>                                      
                  </form>
                </div>
                <div className='image-container col-12 col-md-6 d-flex justify-content-center'>
                  <ImgContainer imageUrl={novios} />
                </div>          
              </section>
            </div>
>>>>>>> d6db0fd9e3539ba3a762ddd9c79bc2bb867a573f
          </div>
          <Footer/>
      </div>
    )
  }
}