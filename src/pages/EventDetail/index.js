import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

import Api from '../../lib/api'
import Moment from 'react-moment'

// Import icon
import novios from '../../img/novios8.svg'
import titleIcon from '../../img/event-color-icon.svg'
import locationIcon from '../../img/icons__wedding/icon__location.png'
import dateIcon from '../../img/icons__wedding/icon__day.png'
import timeIcon from '../../img/icons__wedding/time__icon.png'
import phoneIcon from '../../img/icons__wedding/icon__phone.png'


// Import pages
import ImgContainer from '../../components/ImgContainer'
import HeaderEvent from '../../components/HeaderEvent'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'


// Import CSS
import './EventDetail.css'

export default class EventDetail extends Component {
  constructor(props){
    super (props)
    this.state = {
      event: []
    }
  }
  componentDidMount(){
    // get token
    const token = window.localStorage.getItem('tokenapp')
    var path = this.props.location.pathname
    const idEvent = path.substring(8)
    console.log(token)
    if(token === null) {
      this.props.history.push(`/login`)
    }else{
      async function getEvent (token, idEvent){
        console.log(token)
        const sessionObj = await Api.getEvent(token, idEvent)
        return sessionObj
      }
      const payload = getEvent(token, idEvent)
      payload.then( (resultEvent) => {
        console.log(resultEvent)
        this.setState({
          event: resultEvent.data.event
        });
      })
    }
  }
  
  render() {
    const path = this.props.location.pathname
    const id_event = path.substring(8)
    const {event} = this.state

    return (
      <div className="wrap-event-detail">
        <Navbar/>
        <HeaderEvent
          id={id_event}
          active="detalle"
        />
        <div className="wrap__inner pt-3">

        <section className='row'>
          <div className='col-12 col-md-6'>
            <form className='event-form d-flex flex-column event__info card__app p-5 rounded mt-5'>
              <div className='d-flex pb-md-5 pb-2'>
                <h2 className="title__section">{event.nameEvent}</h2>
              </div>              
              <div className='d-md-flex pb-3'>
                <div className='icon-container'>
                  <img src={locationIcon}  alt=''/>
                </div>                  
                <label className='text-dark' for="location">{event.location}</label>
              </div>                
              <div className='d-md-flex pb-3'>
                <div className='icon-container'>
                  <img src={dateIcon}  alt=''/>
                </div>                 
                <label className='text-dark' for="event-date">{event.eventDate}</label>
              </div>
              <div className='d-md-flex pb-3'>
                <div className='icon-container'>
                  <img src={timeIcon}  alt=''/>
                </div>                  
                <label className='text-dark' for="event-time">{event.eventTime} hrs</label>
              </div>
              <div className='d-md-flex pb-3'>
                <div className='icon-container'>
                  <img src={phoneIcon}  alt=''/>
                </div>                  
                <label className='text-dark' for="contact-phone">+{event.contactPhone}</label>
              </div>

              <div className='d-md-flex pb-3 mt-5'>
                <Link to={`/home`} className="btn__app btn__dark ">Ver más eventos</Link>
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
