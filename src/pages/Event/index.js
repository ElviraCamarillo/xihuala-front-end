import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
import { TimePicker } from 'antd';
import moment from 'moment';
import { ConfigProvider } from 'antd';
import esES from 'antd/es/locale/es_ES';

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
  constructor(props){
    super(props)
    this.state = {
      location: '',
      nameEvent: '',
      eventDate: '',
      eventTime: '06:00',
      contactPhone: '',
      guests: [],
      buget: 0,
      expenses:[],
      idUser: '',
      response: '',
      statusresponse:'',
      startDate: new Date()
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


  onChangeDate(date, dateString) {
    this.setState({ eventDate: dateString })
  }
  onChangeTime(time, timeString) {
    this.setState({ eventTime: timeString })
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
    const currentDate = new Date().toISOString().split("T")[0]

    if(this.state.nameEvent === '') {
      // si no hay nombre del evento
      this.setState({
        response: 'Faltan datos obligatorios',
        statusresponse: 'error'
      });
      // en 4 segundos quitamos el mensaje 
      setTimeout(() => {
        this.setState({
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
      if(payload.success === true){
        this.setState({
          response: 'Evento registrado correctamente',
          statusresponse: 'success'
        })
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
        setTimeout(() => {
          this.setState({
            response: '',
            statusresponse: ''
          });
        }, 4000)
      }
    }
  }

  disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }

  render() {
    const format = 'HH:mm';

    let today = new Date()
    today.setDate(today.getDate() + 1)
    let dd = today.getDate()
    let mm = today.getMonth()+1
    let yyyy = today.getFullYear()

    if(dd<10){
      dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

    today = yyyy+'-'+mm+'-'+dd;
    
    return (
      <div className="wrap__home">
          <Navbar/>
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
                      {/* <input 
                        type="date" 
                        id="event-date" 
                        name="eventDate"
                        onChange={this.handleInput.bind(this)}
                        value={this.state.eventDate}
                        autoComplete="off" 
                        min={today}
                      /> */}

                      <ConfigProvider locale={esES}>
                        
                        <DatePicker 
                        onChange={this.onChangeDate.bind(this)} 
                        size='large' 
                        min={today}
                        disabledDate={this.disabledDate.bind(this)}
                        />

                      </ConfigProvider>
                    </div>
                    <div className=' pb-3'>                
                      <label className='text-dark' for="event-time">Hora del evento:</label>
                      <ConfigProvider locale={esES}>
                      <TimePicker
                          defaultValue={
                          moment('06:00', format)}
                          format={format}
                          onChange={this.onChangeTime.bind(this)}
                        />
                      </ConfigProvider>

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
                    <div className=' pb-3'>                 
                      <label className='text-dark' for="contact-phone">Presupuesto inicial:</label>
                      <input 
                        type="text" 
                        id="buget" 
                        name="buget"
                        onChange={this.handleInput.bind(this)}
                        value={this.state.buget}
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
