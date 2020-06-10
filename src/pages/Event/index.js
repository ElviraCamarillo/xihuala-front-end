import React, { Component } from 'react'

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

  handleInput({ target:{ name, value }}){
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

    // buscar los eventos con este id user
    async function getSession (token){
      console.log(token)
      const sessionObj = await Api.getUserSession(token)
      return sessionObj
    }

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
      console.log(payload)
      if(payload.success === true){
        
        this.setState({
          response: 'Evento registrado correctamente',
          statusresponse: 'success'
        });
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
          statusresponse: 'Ocurrio algun error al crear el evento'
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
      <div>
          <Navbar/>
          <div className="ctn--newEvent">
            <div className="wrap__inner pb-5">
              <section className='row'>
                <div className='col-12 col-md-6'>
                  <div className='d-flex pb-5'>
                    <h2 className="title__section">Nuevo Evento</h2>
                  </div>              
                  <form 
                    className='event-form d-flex flex-column card__app px-5 py-3 rounded mt-1'
                    onSubmit={this.onSubmit.bind(this)}
                  >
                    <div className=' pb-3'>
                      <div className='icon-container'>
                        <img src={coupleIcon}  alt='' />
                      </div>                  
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
                      <div className='icon-container'>
                        <img src={locationIcon}  alt='' />
                      </div>                  
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
                      <div className='icon-container'>
                        <img src={dateIcon}  alt='' />
                      </div>                  
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
                      <div className='icon-container'>
                        <img src={timeIcon}  alt='' />
                      </div>                  
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
                      <div className='icon-container'>
                        <img src={phoneIcon}  alt='' />
                      </div>                  
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
          </div>
          <Footer/>
      </div>
    )
  }
}