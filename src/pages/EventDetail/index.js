import React, { Component } from 'react'

import novios from '../../img/novios8.svg'
import titleIcon from '../../img/event-color-icon.svg'
import locationIcon from '../../img/location-icon.svg'
import dateIcon from '../../img/date-icon.svg'
import timeIcon from '../../img/hour-icon.svg'
import phoneIcon from '../../img/phone-icon.svg'

import ImgContainer from '../../components/ImgContainer'
import HeaderEvent from '../../components/HeaderEvent'
import Navbar from '../../components/Navbar'

import './EventDetail.css'

export default class EventDetail extends Component {
  render() {
    return (
      <div>
        <body>
          <Navbar/>
          <HeaderEvent/>

          <section className='row'>
            <div className='col-12 col-md-6'>
              <div className='d-flex pb-md-5 pb-2'>
                <img className='pr-3' src={titleIcon}  alt=''/>
                <h2>Raquel y Daniel</h2>
              </div>              
              <form className='event-form d-flex flex-column'>
                <div className='d-md-flex pb-3'>
                  <div className='icon-container'>
                    <img src={locationIcon}  alt=''/>
                  </div>                  
                  <label className='text-dark' for="location">Tonalá 10, Roma Nte., Cuauhtémoc, 03800 Ciudad de México, CDMX</label>
                </div>                
                <div className='d-md-flex pb-3'>
                  <div className='icon-container'>
                    <img src={dateIcon}  alt=''/>
                  </div>                  
                  <label className='text-dark' for="event-date">19 de diciembre de 2020</label>
                </div>
                <div className='d-md-flex pb-3'>
                  <div className='icon-container'>
                    <img src={timeIcon}  alt=''/>
                  </div>                  
                  <label className='text-dark' for="event-time">15:30 hrs</label>
                </div>
                <div className='d-md-flex pb-3'>
                  <div className='icon-container'>
                    <img src={phoneIcon}  alt=''/>
                  </div>                  
                  <label className='text-dark' for="contact-phone">+5255445555</label>
                </div>                
              </form>                                    
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
