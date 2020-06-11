import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Api from '../../lib/api'

import {
  Link
} from "react-router-dom";

//Import icons
import novios from '../../img/novios3.svg'

// Import components
import ImgContainer from '../../components/ImgContainer'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

// Import CSS
import './ConfirmGuest.css'

export default class ConfirmGuest extends Component {

  constructor(props){
    super (props)
    this.state = {
      nameFamily: '',
      numberGuests: '',
      emailFamily: '',
      id_event:'',
      note:'',
      status:'',
      isConfirm: false,
      response: '',
      statusresponse: ''
    }
  }
  handleInput({ target: { name, value } }) {
    this.setState({
        [name]: value
    })        
  }

  componentDidMount(props){
    // get token
    const path = this.props.history.location.pathname
    const search = this.props.history.location.search
    const idEvent = path.split('/')[2]
    const email_guest = search.substring(7)
    console.log(idEvent, search.substring(7), email_guest)  

    async function getEvent (idEvent){
      const sessionObj = await Api.getEvent(idEvent)
      return sessionObj
    }
    const payload = getEvent(idEvent)
    payload.then( (resultEvent) => {
      console.log(resultEvent)
      let dataEvent = {}
      for(let item in resultEvent.data.event.guests){
        console.log(resultEvent.data.event.guests[item].emailFamily)
        if(email_guest === resultEvent.data.event.guests[item].emailFamily){
          dataEvent = resultEvent.data.event.guests[item]
        }
      }
      console.log(dataEvent)
      this.setState({
        nameFamily: dataEvent.nameFamily,
        emailFamily: dataEvent.emailFamily,
        numberGuests: dataEvent.numberGuests,
        id_event: dataEvent.idEvent,
        note: dataEvent.note,
        status: dataEvent.status,
      });
    })
  }
  async onSubmit (event) {
    event.preventDefault()

    const nameFamily= this.state.nameFamily
    const numberGuests= parseInt(this.state.numberGuests)
    const emailFamily = this.state.emailFamily
    const note = this.state.note
    const status = 'confirmado'

    console.log(this.props)
    var path = this.props.location.pathname
    const largeEvent = path.substring(7)
    const idEvent= largeEvent.substring(0,24)

    if(nameFamily == '') {
      // si pass no coinciden
      console.log('Faltan datos')
      this.setState({
        isConfirm: false,
      });
      // setTimeout(() => {
      //   this.setState({
      //     ispassok: true,
      //     response: '',
      //     statusresponse: ''
      //   });
      // }, 4000)

    }else{
      // si todo ok
      console.log(note)
      const payload = await Api.confirmGuestEvent(idEvent, {nameFamily, numberGuests, emailFamily, note, status})
      console.log(payload)
      if(payload.success === true){

        this.setState({
          isConfirm: true,
          response: '¡Gracias por confirmar!',
          statusresponse: 'success'
        });
        // en 4 segundos quitamos el mensaje 
        setTimeout(() => {
          this.setState({
            statusresponse: '',
            response:''
          });
        }, 4000)
        
      }else{
        this.setState({
          isConfirm: false,
          response: '¡Lo sentimos, Ocurrió algun error al confirmar!',
          statusresponse: 'error'
        });
        setTimeout(() => {
          this.setState({
            statusresponse: '',
            response:''
          });
        }, 4000)
      }
      

    }

  }

  render() {
    const path = this.props.history.location.pathname
    const search = this.props.history.location.search
    const id_event = path.split('/')[2]
    const email_guest = search.split('/')[2]
    console.log(search.substring(7))  
    return (
      <div className="ctn__confirm pt-3">
          <Navbar/>
          <div className="wrap__inner mt-5">
            <h2 className="title__section mt-5">¡Confirma tu asistencia!</h2>
            <section className='row'>
              <div className='col-12 col-md-6'>
                <form 
                  className='confirm-form d-flex flex-column card__app p-5 rounded' 
                  action=''
                  onSubmit={this.onSubmit.bind(this)}
                  >
                  <p className="mb-3">Familia:  <strong>{this.state.nameFamily}</strong></p>
                  <p className='mb-3'>Número de invitados: <strong>{this.state.numberGuests}</strong></p>
                  <label className='mt-2' for="note-confirm">Nota:</label>
                  <input 
                    type="hidden" 
                    name="emailFamily" 
                    value={this.state.emailFamily}
                    onChange={this.handleInput.bind(this)}
                  />
                  <input 
                    type="hidden" 
                    name="numberGuests" 
                    value={this.state.numberGuests}
                    onChange={this.handleInput.bind(this)}
                  />
                  <input 
                    type="hidden" 
                    name="status" 
                    value='confirmado'
                    onChange={this.handleInput.bind(this)}
                  />
                  <textarea 
                    rows="4"
                    id="note-confirm" 
                    name="note"
                    autoComplete="off"
                    value={this.state.note}
                    onChange={this.handleInput.bind(this)}
                  />

                  <Button type="submit" className='btn__app btn__dark  mb-3 mt-5'>Asistiré</Button>

                  <Link className="btn__app btn__outline mb-3" to="/">Lo pensaré</Link>
                  <p className={`response-message ${this.state.statusresponse}`}>{this.state.response}</p>

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
