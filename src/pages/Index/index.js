import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './Index.css'

import novios from '../../img/novios1.svg'
import eventIcon from '../../img/card-event-icon.svg'
import guestIcon from '../../img/card-guest-icon.svg'
import inviteIcon from '../../img/card-invite-icon.svg'
import carousel1 from '../../img/carousel1.jpg'
import carousel2 from '../../img/carousel2.jpg'
import carousel3 from '../../img/carousel3.jpg'

import HeaderPreLogin from '../../components/HeaderPreLogin'
import ImgContainer from '../../components/ImgContainer'
import Card from './components/Card'


export default function Index() {
  return (
    <div>
      <body>
          
        <HeaderPreLogin />

        <section className='section1 row'>
          <div className='col-12'>
            <h2 className='index-title'>Organicemos juntos tu boda</h2>
            <p className='index-text text-dark'>Te brindamos las herramientas necesarias para que organices tu boda, de manera fácil y sin complicaciones.</p>
          </div>
        </section>

        <section className='row'>
          <div className='carousel col-12'>
            <Carousel>
              <Carousel.Item>
                <img
                  className="img-carousel d-block w-100"
                  src={carousel1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-carousel d-block w-100"
                  src={carousel2}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-carousel d-block w-100"
                  src={carousel3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </section>

        <section className='cards-section row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-4'>
            <Card cardIcon={eventIcon} cardTitle={'Registra tu evento'} cardText={'Empieza indicando donde será la ceremonia religiosa, la fiesta y cuantos invitados consideras.'} />
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-4'>
          <Card cardIcon={guestIcon} cardTitle={'Organiza a tus invitados'} cardText={'Mantén el control de las confirmaciones de tus invitados, así como de peticiones especiales.'} />
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-4'>
          <Card cardIcon={inviteIcon} cardTitle={'Envía las invitaciones'} cardText={'Envía las invitaciones de forma totalmente digital y recibe las confirmaciones de tus invitados.'} />
          </div>
        </section>

        <section className='row d-flex align-items-center'>
          <div className='col-12 col-md-6'>
            <h2 className='index-title2'>Mantén todo bajo control</h2>
            <p className='index-text2 text-dark'>Que no se te escape nada y no te salgas de tu presupuesto. Te ayudamos.</p>
          </div>
          <div className='col-12 col-md-6 d-flex justify-content-center'>
            <ImgContainer imageUrl={novios} />
          </div>
        </section>

      </body>
    </div>
  )
}
