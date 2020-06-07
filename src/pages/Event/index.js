import React, { Component } from 'react'

import novios from '../../img/novios7.svg'
import titleIcon from '../../img/event-color-icon.svg'
import coupleIcon from '../../img/pople-icon.svg'
import locationIcon from '../../img/location-icon.svg'
import dateIcon from '../../img/date-icon.svg'
import timeIcon from '../../img/hour-icon.svg'
import phoneIcon from '../../img/phone-icon.svg'

import ImgContainer from '../../components/ImgContainer'
import PrimaryButton from '../../components/PrimaryButton'
import HeaderEvent from '../../components/HeaderEvent'
import Navbar from '../../components/Navbar'

import './Event.css'

export default class Event extends Component {
  render() {
    return (
      <div>
        <body>
          <Navbar/>
          <HeaderEvent/>

          <section className='row'>
            <div className='col-12 col-md-6'>
              <div className='d-flex pb-5'>
                <img className='pr-3' src={titleIcon} alt='' />
                <h2>Evento</h2>
              </div>              
              <form className='event-form d-flex flex-column'>
                <div className='d-md-flex pb-3'>
                  <div className='icon-container'>
                    <img src={coupleIcon}  alt='' />
                  </div>                  
                  <label className='text-dark' for="couple-names">Novios:</label>
                  <input type="text" id="couple-names" name="couple-names" />
                </div>
                <div className='d-md-flex pb-3'>
                  <div className='icon-container'>
                    <img src={locationIcon}  alt='' />
                  </div>                  
                  <label className='text-dark' for="location">Ubicación:</label>
                  <input type="text" id="location" name="location" />
                </div>                
                <div className='d-md-flex pb-3'>
                  <div className='icon-container'>
                    <img src={dateIcon}  alt='' />
                  </div>                  
                  <label className='text-dark' for="event-date">Fecha del evento:</label>
                  <input type="date" id="event-date" name="event-date" />
                </div>
                <div className='d-md-flex pb-3'>
                  <div className='icon-container'>
                    <img src={timeIcon}  alt='' />
                  </div>                  
                  <label className='text-dark' for="event-time">Hora del evento:</label>
                  <input type="text" id="event-time" name="event-time" />
                </div>
                <div className='d-md-flex pb-3'>
                  <div className='icon-container'>
                    <img src={phoneIcon}  alt='' />
                  </div>                  
                  <label className='text-dark' for="contact-phone">Tel. de contacto:</label>
                  <input type="text" id="contact-phone" name="contact-phone" />
                </div>                
              </form>
              <div className='button d-flex flex-column justify-content-center align-items-start'>
                <PrimaryButton name={"Guardar evento"}/>
              </div>                                      
            </div>
            <div className='image-container col-12 col-md-6 d-flex justify-content-center'>
              <ImgContainer imageUrl={novios} />
            </div>          
          </section>

        </body>
      </div>
    )
  }
}
